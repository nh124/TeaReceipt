const express = require("express");
const { PostService } = require("../Services/PostService");
const authenticateToken = require("../middleware/authnticateToken");
const router = express.Router();

const service = new PostService();
router.post("/createPost", authenticateToken, async (req, res, next) => {
  try {
    const { name, phone_number, city, caption } = req.body;
    const data = {
      user_id: req.user.id,
      name: name,
      phone_number: phone_number,
      city: city,
      caption: caption,
    };
    const response = await service.createPost(data);
    if (response.status === 400) return res.status(400).send(response);
    return res.status(200).send(response);
  } catch (err) {
    console.log(req.body, res.body);
    next(err);
  }
});

router.get("/getPost", authenticateToken, async (req, res, next) => {
  try {
    const response = await service.getPosts();
    if (response.status === 400) return res.status(400).send(response);
    return res.status(200).send(response);
  } catch (err) {
    console.log(req.body, res.body);
    next(err);
  }
});
module.exports = router;
