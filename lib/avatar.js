/**
 * Module for generating a random avatar URL.
 *
 * @module lib/avatar.js
 * @author Rasmus Falk
 * @version 1.0.0
 */

'use strict'

/**
 * Generates a random avatar URL with the numbers 1 - 6.
 */
module.exports = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  return `../../../assets/avatars/avatar-${randomNumber}.png`
}
