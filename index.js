const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User"); // 데이터 모델 가져오기

// for parsing
app.use(bodyParser.urlencoded({ extended: true }));
// application/x-www-form-urlencoded
app.use(bodyParser.json());
// application/json

// mongoose: 간단하게, 몽고DB를 편하게 쓸수 있는 Object Modeling Tool
const mongoose = require("mongoose");
// application과 mongoDB 연결
mongoose
  .connect(config.mongoURI, {
    // deprecation warning 제거용 옵션 설정
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! hey! bye");
});

// register route 만들기
app.post("/register", (req, res) => {
  // 회원 가입 시에 필요한 정보들을 client 에서 가져와서 DB에 넣어주기

  // 모델을 이용하여 인스턴스 생성
  const user = new User(req.body);
  // req.body 안에는 객체 user 정보가 담겨있음

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
