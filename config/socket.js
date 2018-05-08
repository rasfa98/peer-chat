/**
 * Socket.io configuration.
 *
 * @module config/socket.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

 'use strict'

 const socket = require('socket.io')
 const User = require('../models/User')

 /**
  * Configures and starts the websocket server.
  *
  * @param {object} server A HTTP server object.
  * @returns IO object.
  */
 module.exports.run = (server) => {
   const io = socket(server)

   io.on('connection', async socket => {
     socket.on('newUser', async user => {
       await User.findOneAndUpdate({ _id: user.id }, { socketId: socket.id, status: 'online' })

       const currentUser = await User.findOne({ socketId: socket.id })

       io.emit('updateFriendStatus', { id: currentUser._id, status: 'online' })
       socket.emit('updateCurrentUserStatus', 'online')
     })

     socket.on('disconnect', async () => {
       const currentUser = await User.findOne({ socketId: socket.id })

       await User.findOneAndUpdate({ _id: currentUser._id }, { status: 'offline', socketId: null })

       io.emit('updateFriendStatus', { id: currentUser._id, status: 'offline' })
       socket.emit('updateCurrentUserStatus', 'offline')
     })

     socket.on('updateStatus', async status => {
       const currentUser = await User.findOne({ socketId: socket.id })

       await User.findOneAndUpdate({ _id: currentUser.id }, { status: status })

       io.emit('updateFriendStatus', { id: currentUser._id, status: status })
       socket.emit('updateCurrentUserStatus', status)
     })

     socket.on('removeFriend', async id => {
       const currentUser = await User.findOne({ socketId: socket.id })
       const friend = await User.findOne({ _id: id })

       currentUser.friends.forEach((x, i) => {
         if (x.id === friend._id.toString()) { currentUser.friends.splice(i, 1) }
       })

       friend.friends.forEach((x, i) => {
         if (x.id === currentUser._id.toString()) { friend.friends.splice(i, 1) }
       })

       await User.findOneAndUpdate({ _id: currentUser._id }, { friends: currentUser.friends })
       await User.findOneAndUpdate({ _id: friend._id }, { friends: friend.friends })
     })

     // Peer2Peer
     socket.on('sendSignal', async data => {
       const currentUser = await User.findOne({ socketId: socket.id })
       const receiver = await User.findOne({ _id: data.id })

       socket.to(receiver.socketId).emit('newSignal', { peerId: data.peerId, id: currentUser.id, type: data.type, chatType: data.chatType, caller: currentUser.fullName })
     })

     socket.on('hangUp', async id => {
       const receiver = await User.findOne({ _id: id })
       socket.to(receiver.socketId).emit('hangUp')
     })

     socket.on('cancelCall', async id => {
       const receiver = await User.findOne({ _id: id })
       socket.to(receiver.socketId).emit('cancelCall')
     })

     // Friend requests
     socket.on('addUser', async id => {
       const currentUser = await User.findOne({ socketId: socket.id })
       const receiver = await User.findOne({ _id: id })

       const filteredRequests = receiver.friendRequests.filter(x => x.id === id)
       const filteredFriends = currentUser.friends.filter(x => x.id === id)

       if (filteredRequests.length === 0 && filteredFriends.length === 0 && !receiver._id.equals(currentUser._id)) {
         const friendRequests = receiver.friendRequests

         const newRequest = {
           fullName: currentUser.fullName,
           email: currentUser.email,
           id: currentUser._id,
           avatar: currentUser.avatar
         }

         friendRequests.push(newRequest)

         await User.findOneAndUpdate({ _id: id }, { friendRequests: friendRequests })

         socket.to(receiver.socketId).emit('addUser')
       }
     })

     socket.on('declineRequest', async id => {
       const currentUser = await User.findOne({ socketId: socket.id })
       const friendRequests = currentUser.friendRequests

       for (let i = 0; i < friendRequests.length; i++) {
         if (friendRequests[i].id === id) {
           friendRequests.splice(i, 1)
         }
       }

       await User.findOneAndUpdate({ _id: currentUser._id }, { friendRequests: friendRequests })
     })

     socket.on('acceptRequest', async id => {
       const currentUser = await User.findOne({ socketId: socket.id })
       const sender = await User.findOne({ _id: id })

       const matchingFriendRequests = currentUser.friendRequests.filter(x => x.id === id)
       const currentUserFriends = currentUser.friends.filter(x => x.id === id)

       if (matchingFriendRequests.length === 1 && currentUserFriends.length === 0) {
         const currentUserFriendsArray = currentUser.friends
         const senderFriendsArray = sender.friends

         currentUserFriendsArray.push({ id: sender._id })
         senderFriendsArray.push({ id: currentUser._id })

         const currentUserFriendRequests = currentUser.friendRequests

         for (let i = 0; i < currentUserFriendRequests.length; i++) {
           if (currentUserFriendRequests[i].id === id) {
             currentUserFriendRequests.splice(i, 1)
           }
         }

         await User.findOneAndUpdate({ _id: currentUser._id }, { friends: currentUserFriendsArray, friendRequests: currentUserFriendRequests })
         await User.findOneAndUpdate({ _id: sender._id }, { friends: senderFriendsArray })

         socket.emit('acceptRequest')
         socket.to(sender.socketId).emit('acceptRequest')
       }
     })

     // Text messages
     socket.on('sendMessage', async data => {
       const currentUser = await User.findOne({ socketId: socket.id })
       const receiver = await User.findOne({ _id: data.id })

       // Send message to the sender.
       socket.emit('newMessage', { message: data.message, id: receiver.id, name: 'you' })

       // Send message to the receiver.
       socket.to(receiver.socketId).emit('newMessage', { message: data.message, id: currentUser._id, name: currentUser.fullName })
       socket.to(receiver.socketId).emit('messageNotification', currentUser.id)

       let currentUserConversations = currentUser.conversations.filter(x => x.id === receiver._id.toString())
       let receiverConversations = receiver.conversations.filter(x => x.id === currentUser._id.toString())

       if (currentUserConversations.length > 0) {
         currentUserConversations[0].messages.push({ message: data.message, sender: 'you' })
         receiverConversations[0].messages.push({ message: data.message, sender: currentUser.fullName })
       } else {
         currentUserConversations.push({ id: data.id, messages: [ { message: data.message, sender: 'you' } ] })
         receiverConversations.push({ id: currentUser._id, messages: [ { message: data.message, sender: currentUser.fullName } ] })

         currentUser.conversations.push(currentUserConversations[0])
         receiver.conversations.push(receiverConversations[0])
       }

       await User.findOneAndUpdate({ _id: currentUser._id }, { conversations: currentUser.conversations })
       await User.findOneAndUpdate({ _id: receiver._id }, { conversations: receiver.conversations })
     })
   })

   return io
 }
