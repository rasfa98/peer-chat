'use strict'

const socket = require('socket.io')
const User = require('../models/User')
const emoji = require('../lib/emoji')

function removeFriendRequest (id, requests) {
  for (let i = 0; i < requests.length; i++) {
    if (requests[i].id === id) { requests.splice(i, 1) }
  }
}

function removeFriend (user, id) {
  user.friends.forEach((x, i) => {
    if (x.id === id.toString()) { user.friends.splice(i, 1) }
  })
}

module.exports.run = (server) => {
  const io = socket(server)

  io.on('connection', async socket => {
    socket.on('newUser', async user => {
      await User.findOneAndUpdate({ _id: user.id }, { socketId: socket.id, status: 'online' })

      io.emit('updateFriendStatus', { id: user.id, status: 'online' })
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
      try {
        const currentUser = await User.findOne({ socketId: socket.id })
        const friend = await User.findOne({ _id: id })

        removeFriend(currentUser, id)
        removeFriend(friend, currentUser._id)

        await User.findOneAndUpdate({ _id: currentUser._id }, { friends: currentUser.friends })
        await User.findOneAndUpdate({ _id: friend._id }, { friends: friend.friends })

        socket.emit('updateFriends', currentUser.friends)
        socket.to(friend.socketId).emit('updateFriends', friend.friends)
        socket.emit('friendResponseServer', { type: 'success', message: 'The selected friend has been removed.' })
      } catch (err) { socket.emit('friendResponseServer', { type: 'error', message: 'An error occured when trying to remove the selected friend, please try again...' }) }
    })

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

    socket.on('answered', async id => {
      const receiver = await User.findOne({ _id: id })

      socket.to(receiver.socketId).emit('answered')
    })

    socket.on('newRequest', async id => {
      try {
        const currentUser = await User.findOne({ socketId: socket.id })
        const receiver = await User.findOne({ _id: id })

        const filteredRequests = receiver.friendRequests.filter(x => x.id === currentUser._id.toString())
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

          socket.to(receiver.socketId).emit('newRequest')
          socket.emit('friendResponseServer', { type: 'success', message: 'Friend request has been sent!' })
        } else {
          socket.emit('friendResponseServer', { type: 'error', message: 'You have already sent a request to this user.' })
        }
      } catch (err) { socket.emit('friendResponseServer', { type: 'error', message: 'An error occured when trying to send the request, please try again...' }) }
    })

    socket.on('declineRequest', async id => {
      try {
        const currentUser = await User.findOne({ socketId: socket.id })

        removeFriendRequest(id, currentUser.friendRequests)

        await User.findOneAndUpdate({ _id: currentUser._id }, { friendRequests: currentUser.friendRequests })

        socket.emit('friendResponseServer', { type: 'success', message: 'Friend request has been declined.' })
      } catch (err) { socket.emit('friendResponseServer', { type: 'error', message: 'An error occured when trying to decline the request, please try again...' }) }
    })

    socket.on('acceptRequest', async id => {
      try {
        const currentUser = await User.findOne({ socketId: socket.id })
        const sender = await User.findOne({ _id: id })

        const matchingFriendRequests = currentUser.friendRequests.filter(x => x.id === id)
        const currentUserFriends = currentUser.friends.filter(x => x.id === id)

        if (matchingFriendRequests.length === 1 && currentUserFriends.length === 0) {
          const currentUserFriendsArray = currentUser.friends
          const senderFriendsArray = sender.friends

          currentUserFriendsArray.push({ id: sender._id })
          senderFriendsArray.push({ id: currentUser._id })

          removeFriendRequest(id, currentUser.friendRequests)

          await User.findOneAndUpdate({ _id: currentUser._id }, { friends: currentUserFriendsArray, friendRequests: currentUser.friendRequests })
          await User.findOneAndUpdate({ _id: sender._id }, { friends: senderFriendsArray })

          socket.emit('acceptRequest')
          socket.to(sender.socketId).emit('acceptRequest')
          socket.emit('friendResponseServer', { type: 'success', message: 'The user has been added to your friend list!' })
        }
      } catch (err) { socket.emit('friendResponseServer', { type: 'error', message: 'An error occured when trying to accept the request, please try again...' }) }
    })

    socket.on('sendMessage', async data => {
      try {
        const currentUser = await User.findOne({ socketId: socket.id })
        const receiver = await User.findOne({ _id: data.id })

        const message = emoji.addEmojis(data.message)

        socket.emit('newMessage', { message: message, id: receiver.id, name: 'you' })

        socket.to(receiver.socketId).emit('newMessage', { message: message, id: currentUser._id, name: currentUser.fullName })
        socket.to(receiver.socketId).emit('messageNotification', currentUser.id)

        let currentUserConversations = currentUser.conversations.filter(x => x.id === receiver._id.toString())
        let receiverConversations = receiver.conversations.filter(x => x.id === currentUser._id.toString())

        if (currentUserConversations.length > 0) {
          currentUserConversations[0].messages.push({ message: message, sender: 'you' })
          receiverConversations[0].messages.push({ message: message, sender: currentUser.fullName })
        } else {
          currentUserConversations.push({ id: data.id, messages: [ { message: message, sender: 'you' } ] })
          receiverConversations.push({ id: currentUser._id, messages: [ { message: message, sender: currentUser.fullName } ] })

          currentUser.conversations.push(currentUserConversations[0])
          receiver.conversations.push(receiverConversations[0])
        }

        await User.findOneAndUpdate({ _id: currentUser._id }, { conversations: currentUser.conversations })
        await User.findOneAndUpdate({ _id: receiver._id }, { conversations: receiver.conversations })
      } catch (err) { socket.emit('messageResponseServer', { message: 'An error occured when trying to send the message...' }) }
    })

    socket.on('callError', async id => {
      const receiver = await User.findOne({ _id: id })

      socket.to(receiver.socketId).emit('callError')
    })
  })

  return io
}
