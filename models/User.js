const mongoose = require("mongoose");

// 스키마 생성
const userSchema = mongoose.Schema({
  // 필드 작성
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: String,
  tokenExp: Number,
});

// Mongoose model is a wrapper on the Mongoose schema.
// const User = mongoose.model(모델의 이름, 스키마);
const User = mongoose.model("User", userSchema);

module.exports = { User };
