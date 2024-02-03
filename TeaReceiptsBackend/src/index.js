const express = require("express");
const { createCommentTable } = require("./Database/models/comment");
const { createUserTable } = require("./Database/models/user");
const { createPostTable } = require("./Database/models/post");
const authRouter = require("./API/authRouter");
const postRouter = require("./API/postRouter");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;
const StartServer = async () => {
  const app = express();
  // make sure to update the models based on the SQL Schema
  // createCommentTable();
  // createUserTable();
  // createPostTable();
  app.use(bodyParser.json());
  app.use(express.json());
  console.log(PORT);

  app.use("/auth", authRouter);
  app.use("/post", postRouter);
  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
