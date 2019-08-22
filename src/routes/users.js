import express from 'express';
import UserController from '../controllers/users';
import UserMiddleware from '../middlewares/users';

const router = express.Router();
// GET users listing.
// /api/v1/auth/

export default function () {
  router.get('/', (req, res) => {
    res.json({status:'Authentication Working'});
  });

  // POST /api/v1/auth/signup
  router.post('/signup', UserMiddleware.checkUserExist, UserMiddleware.encryptPassword, UserController.addUser);
  return router;
}
