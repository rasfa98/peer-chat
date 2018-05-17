'use strict'

module.exports = () => {
  const randomAvatarNumber = Math.floor(Math.random() * 6) + 1

  return `../../../assets/avatars/avatar-${randomAvatarNumber}.png`
}
