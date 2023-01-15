const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    // 유니크 설정시 동일한 항목을 필터해줌
    username: { type: String, require: true, unique: true },
    hashedPassWord: { type: String, require: true },
  },
  { timestamps: true }
);
// 유저 모델 생성
module.exports = mongoose.model("user", UserSchema);
