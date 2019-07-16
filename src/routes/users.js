import express from 'express';

const router = express.Router();
// GET users listing.

export default function () {
  router.get('/', (req, res) => {
    res.send('Client N New Respond with Three Resource and more Resourcess');
  });

  return router;
}
