/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';
import Model from '../models/users';

const model = new Model('users');

export default class UserController {
  static async addUser(req, res) {
    const columns = 'email, password, first_name, last_name';
    const values = `'${req.body.email}','${req.params.hashPassword}','${req.body.first_name}','${req.body.last_name}'`;
    await model.insert(columns, values);
    //  console.log(data);
    const data2 = await model.select('id, is_admin', `where email = '${req.body.email}'`);
    // Generate Token
    const token = await jwt.sign({ id: data2[0].id }, process.env.jwtsecret);
    return res.status(201).json({
      status: 'success',
      data: {
        user_id: data2[0].id,
        is_admin: data2[0].is_admin,
        token,
      },
    });
  }
}
