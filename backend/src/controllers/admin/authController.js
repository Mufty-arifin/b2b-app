const { User, sequelize } = require("../../../db/models");
const { comparePassword } = require("../../helpers/encryption");
const { signToken } = require("../../helpers/signature");

class AuthController {
  static async register(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { username, email, password, phone, address } = req.body;
      const user = await User.create(
        {
          username,
          email,
          password,
          phone,
          address,
          isActive: true,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(201).json({
        statusCode: 201,
        message: "Register successfully",
        data: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw {
          name: "Email is required",
        };
      }

      if (!password) {
        throw {
          name: "Password is required",
        };
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw {
          name: "InvalidCredentials",
        };
      }

      const isPasswordValid = comparePassword(password, user.password);

      if (!isPasswordValid) {
        throw {
          name: "InvalidCredentials",
        };
      }

      const access_token = signToken({
        id: user.id,
        role: user.role,
      });

      res.status(200).json({
        statusCode: 200,
        message: "Login successfully",
        data: {
          access_token,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
