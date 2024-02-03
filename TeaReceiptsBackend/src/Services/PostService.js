const { postRepository } = require("../Database/repositoories/post-repository");
class PostService {
  constructor() {
    this.postRepository = new postRepository();
  }
  async createPost(data) {
    try {
      this.postRepository.createPost(data);
      return {
        success: true,
        message: "Post created successfully",
        statusCode: 200,
      };
    } catch (err) {
      console.error("Error creating user:", error);
      return {
        success: false,
        message: "Error getting post",
        statusCode: 400,
      };
    }
  }
  async getPosts() {
    try {
      const results = await this.postRepository.getPosts();
      console.log({ results: results });
      return {
        success: true,
        message: "get Post successful",
        statusCode: 200,
        results: results,
      };
    } catch (err) {
      console.error("Error creating user:", err);
      return {
        success: true,
        message: "Post was not created successfully",
        statusCode: 400,
      };
    }
  }
}

module.exports = {
  PostService,
};
