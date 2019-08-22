/* eslint-disable linebreak-style */
import bcrypt from 'bcryptjs';
import Model from '../models/users';

const model = new Model('users');

export default class UserMiddleware {
  static encryptPassword(req, res, next) {
    const { password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    req.params.hashPassword = hashPassword;
    next();
  }

  static async checkUserExist(req, res, next) {
    const user = await model.select('email', `where email = '${req.body.email}'`);
    if (user.length > 0) {
      res.status(400).json({
        status: 'error',
        error: 'Email already exist',
      });
    } else {
      next();
    }
  }
}
