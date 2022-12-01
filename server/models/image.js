const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    // 어떤 타입들인지 선언
    // 필수면 타입 선언을 해줘야함 아니라면 그냥 문자열 넣으면됨
    key: { type: String, requireed: true },
    originalFileName: { type: String, requireed: true },
  },
  {
    // 이미지가 저장된 시간이 자동으로 생성됨 수정할 때마다 업데이트를 시켜줌
    timestamps: true,
  }
);

module.exports = mongoose.model("image", ImageSchema);
