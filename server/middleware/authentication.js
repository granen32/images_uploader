const mogoose = require('mongoose')
const User = require('../models/User')
const authenticate = async (req, res, next) => {
  const { sessionId } = req.headers
  // 많은 api 작업이 필요함 매번 작성하기 귀찮으니 미들웨어를 만들어서 처리하자
  //   if else return 문을 제대로 해줘야함 잘못하면 리퀘스트가 두번 호출됨
  if (!sessionId || !mogoose.isValidObjectId(sessionId)) return next()
  const user = await User.findOne({ 'sessions._id': sessionId })
  if (!user) return next()
  req.user = user
  return next()
}

module.exports = { authenticate }
