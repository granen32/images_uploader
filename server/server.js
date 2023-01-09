require("dotenv").config();
const express = require("express");
const mogoose = require("mongoose");
const { imageRouter } = require("./routes/imageRouter");
const { userRouter } = require("./routes/userRouter");
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
    app.use(express.json());
    // express json() => 이렇게 보내면 바디에서 응답을 제대로 받기 위해서는 리퀘스트가 넘어올 때 바디가 자동으로 제이슨 형식으로 만들어 지지가 않음
    // 이러한 부분을 미들웨어를 생성하여 통과하게 해줘야함
    app.use("/images", imageRouter);
    app.use("/users", userRouter);
    app.listen(PORT, () => console.log("express on server.js" + PORT));
    console.log("mongDb connected.");
  })
  .catch((err) => console.log(err));
