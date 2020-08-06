const express = require("express");
const app = express();
const port = 5000;

// mongoose: 간단하게, 몽고DB를 편하게 쓸수 있는 Object Modeling Tool
const mongoose = require("mongoose");
// application과 mongoDB 연결
mongoose
  .connect(
    "mongodb+srv://bomin:bomin331@boilerplate.p3rig.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongoDB connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
