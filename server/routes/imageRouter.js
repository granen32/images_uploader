const imageRouter = require("express").Router();
const Image = require("../models/Image");
// 익스프레스 라우터 관리 작업
const { upload } = require("../middleware/imagesUpload");

// 라우터 만들기 이미지 업로드
// 함수 인자로 리퀘스트 바디 리스폰스 바디
// 라우터 만들기 이미지 업로드
// 함수 인자로 리퀘스트 바디 리스폰스 바디
imageRouter.post("/", upload.single("image"), async (req, res) => {
  // 이 경로로 포스트 메시지를 보냄
  // 미들웨어 중간처리 과정
  // 비동기 처리 어싱크로 보내면 어웨잇 기다려라 결과가 나오기 전까지
  const image = await new Image({
    key: req.file.filename,
    originalFileName: req.file.originalname,
  }).save();
  res.json(image);
});
imageRouter.get("/", async (req, res) => {
  const images = await Image.find();
  res.json(images);
  // 프라미스 리턴
});

module.exports = { imageRouter };
