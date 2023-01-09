require("dotenv").config();
const express = require("express");
const mogoose = require("mongoose");
const { imageRouter } = require("./routes/imageRouter");
const app = express();
const { MONGO_URL, PORT } = process.env;
mogoose
  .connect(
    MONGO_URL,
    // 노드 js 서버에 특수성 비동기적이라서 기다리기전에 서버가 켜져버려서 문제가 생기는 경우가 있음
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // 몽고 db가 연결되고 나서 서버가 연결됨
    // uploads 폴더에 접근 가능하게 하기
    app.use("/uploads", express.static("uploads"));
    app.use("/images", imageRouter);
    app.listen(PORT, () => console.log("express on server.js" + PORT));
    console.log("mongDb connected.");
  })
  .catch((err) => console.log(err));
