const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");
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

module.exports = { upload };
