const express = require("express");
const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");
const mogoose = require("mongoose");
// multer 저장경로 및 네임 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  // uuid 뒤에 mime-types을 활용하여 이미지 타입 설정
  filename: (req, file, cb) =>
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});
// 업로드 설정
const upload = multer({
  storage,
  fileFilter: (req, res, cb) => {
    if (["images/jpeg", "images/png"]) {
      cb(null, true);
    } else {
      cb(new Error("invaid file type", false));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

const app = express();
const PORT = 5001;
mogoose
  .connect(
    "mongodb://admin:pVHBD5OzR40sTBZV@ac-add281w-shard-00-00.cknt4is.mongodb.net:27017,ac-add281w-shard-00-01.cknt4is.mongodb.net:27017,ac-add281w-shard-00-02.cknt4is.mongodb.net:27017/?ssl=true&replicaSet=atlas-qfiowh-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("mongDb connected."))
  .catch((err) => console.log(err));
// uploads 폴더에 접근 가능하게 하기
app.use("/uploads", express.static("uploads"));

// 라우터 만들기 이미지 업로드
// 함수 인자로 리퀘스트 바디 리스폰스 바디
app.post("/upload", upload.single("image"), (req, res) => {
  // 이 경로로 포스트 메시지를 보냄
  // 미들웨어 중간처리 과정
  console.log(req.file);
  res.json(req.file);
});

app.listen(PORT, () => console.log("express on server.js" + PORT));
