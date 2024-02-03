const express = require("express");
const { AuthService } = require("../Services/AuthenticationService");
const router = express.Router();

const service = new AuthService();
router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body, res.body);
    const { name, email, password } = req.body;
    const response = await service.signup({ name, email, password });
    return res.json(response);
  } catch (err) {
    console.log(req.body, res.body);
    next(err);
  }
});

router.post("/signin", async (req, res, next) => {
  try {
    console.log(req.body, res.body);
    const { email, password } = req.body;
    const response = await service.signin({ email, password });
    if (response.statusCode === 401) {
      res.status(400).send(response);
    }
    res.status(200).send(response);
  } catch (err) {
    console.log(req.body, res.body);
    next(err);
  }
});

module.exports = router;
