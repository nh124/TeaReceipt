const {
  authRepo,
} = require("../Database/repositoories/Authentication-repository");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../Utils/GenerateJWTToken");
class AuthService {
  constructor() {
    this.authRepository = new authRepo();
  }
  async userExists(data) {
    try {
      const result = await this.authRepository.searchUser(data);
      return result;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return null;
    }
  }

  async signup(data) {
    try {
      const userExists = await this.userExists(data.email);
      if (userExists.length > 0) {
        return {
          success: false,
          message: "User with this email already exists",
          statusCode: 400,
        };
      }
      this.authRepository.createUser(data);
      return {
        success: true,
        message: "User created successfully",
        statusCode: 201,
      };
    } catch (error) {
      console.error("Error creating user:", error);
      return { statusCode: 400, message: "Failed to create user" };
    }
  }

  async signin(data) {
    const { email } = data;
    const { password } = data;

    try {
      const userExists = await this.userExists(email);
      if (!userExists) {
        return {
          success: false,
          message: "User not found",
        };
      }
      const storedHashedPassword = userExists[0].password;
      const passwordMatch = bcrypt.compareSync(password, storedHashedPassword);
      if (passwordMatch) {
        const accessToken = generateAccessToken(userExists);
        return {
          statusCode: 200,
          message: "User authenticated successfully",
          accessToken: accessToken,
        };
      } else {
        return { statusCode: 400, message: "Incorrect password" };
      }
    } catch (error) {
      console.error("Error creating user:", error);
      return { statusCode: 400, message: "Failed to create user" };
    }
  }
}

module.exports = {
  AuthService,
};
