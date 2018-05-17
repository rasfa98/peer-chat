'use strict'

module.exports.addEmojis = (message) => {
  if (message.search('/:happy:/')) { message = message.replace(/:happy:/g, '\uD83D\uDE00') }
  if (message.search('/:smile:/')) { message = message.replace(/:smile:/g, '\uD83D\uDE42') }
  if (message.search('/:cool:/')) { message = message.replace(/:cool:/g, '\uD83D\uDE0E') }
  if (message.search('/:surprised:/')) { message = message.replace(/:surprised:/g, '\uD83D\uDE2E') }
  if (message.search('/:cheeky:/')) { message = message.replace(/:cheeky:/g, '\uD83D\uDE1B') }
  if (message.search('/:horns:/')) { message = message.replace(/:horns:/g, '\uD83E\uDD18') }
  if (message.search('/:thinking:/')) { message = message.replace(/:thinking:/g, '\uD83E\uDD14') }
  if (message.search('/:blush:/')) { message = message.replace(/:blush:/g, '\uD83D\uDE0A') }
  if (message.search('/:joy:/')) { message = message.replace(/:joy:/g, '\uD83D\uDE02') }
  if (message.search('/:neutral:/')) { message = message.replace(/:neutral:/g, '\uD83D\uDE10') }
  if (message.search('/:scream:/')) { message = message.replace(/:scream:/g, '\uD83D\uDE31') }
  if (message.search('/:rage:/')) { message = message.replace(/:rage:/g, '\uD83D\uDE21') }
  if (message.search('/:sleeping:/')) { message = message.replace(/:sleeping:/g, '\uD83D\uDE34') }
  if (message.search('/:halo:/')) { message = message.replace(/:halo:/g, '\uD83D\uDE07') }
  if (message.search('/:eyes:/')) { message = message.replace(/:eyes:/g, '\uD83D\uDC40') }
  if (message.search('/:sick:/')) { message = message.replace(/:sick:/g, '\uD83E\uDD12') }
  if (message.search('/:silly:/')) { message = message.replace(/:silly:/g, '\uD83D\uDE43') }
  if (message.search('/:confused:/')) { message = message.replace(/:confused:/g, '\uD83D\uDE15') }
  if (message.search('/:grimacing:/')) { message = message.replace(/:grimacing:/g, '\uD83D\uDE2C') }
  if (message.search('/:expressionless:/')) { message = message.replace(/:expressionless:/g, '\uD83D\uDE11') }
  if (message.search('/:zipper:/')) { message = message.replace(/:zipper:/g, '\uD83E\uDD10') }
  if (message.search('/:weary:/')) { message = message.replace(/:weary:/g, '\uD83D\uDE29') }
  if (message.search('/:flushed:/')) { message = message.replace(/:flushed:/g, '\uD83D\uDE33') }
  if (message.search('/:thumbsup:/')) { message = message.replace(/:thumbsup:/g, '\uD83D\uDC4D') }

  return message
}
