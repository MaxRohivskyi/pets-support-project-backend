const {HttpError } = require('../../helpers/errors')
const { Notice } = require('../../models/noticesModel')
const {User} = require('../../models/usersModel')

const getFavoriteNotices = async ( userId, page = 0, limit = 8) => {
 
  const user = await User.findOne({ _id: userId })
    if (!user) {
      throw new HttpError(400, 'User not found')
  }
   console.log(user.favoriteNotices);
  if (!user.favoriteNotices) {
     throw new HttpError(404, 'no favorite ads found ')
   }
 

    const notices = await Notice.find({ '_id': { $in: user.favoriteNotices } })
    .skip(parseInt(page))
    .limit(parseInt(limit))
    console.log(notices);
    if (!notices) {
      throw new HttpError(404, 'Notices not found')
    }
    return notices
}

module.exports = {
    getFavoriteNotices
}