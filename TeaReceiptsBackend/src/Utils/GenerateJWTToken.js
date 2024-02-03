const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../Config/index");

const generateAccessToken = (userData) => {
  const user = {
    id: userData[0].id,
    name: userData[0].name,
    email: userData[0].email,
    username: userData[0].username,
    password: userData[0].password,
  };
  console.log(user);
  const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
  return accessToken;
};

module.exports = generateAccessToken;
