module.exports = {
  databaseConnection: require("./connection"),
  UserRepository: require("./repository/user-repository"),
  CommentRepository: require("./repository/comment-repository"),
  PostRepository: require("./repository/post-repository"),
};
