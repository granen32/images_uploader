const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads" });

const app = express();
const PORT = 5001;
// 라우터 만들기 이미지 업로드
// 함수 인자로 리퀘스트 바디 리스폰스 바디
app.post("/upload", upload.single("imageTest"), (req, res) => {
  // 이 경로로 포스트 메시지를 보냄
  // 미들웨어 중간처리 과정
  console.log(req.file);
  res.json(req.file);
});

app.listen(PORT, () => console.log("express on server.js" + PORT));
