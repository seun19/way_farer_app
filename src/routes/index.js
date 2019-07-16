import express from 'express';

const router = express.Router();
/* GET home page. */

export default function () {
  router.get('/', (req, res) => {
    // - res.render('index', { title: 'Express' });
    res.send('Index Working. Lets go on......');
  });

  return router;
}

// module.exports = router;
