import express from 'express';

const router = express.Router();
/* GET home page. */

export default function () {
  router.get('/', (req, res) => {
    // - res.render('index', { title: 'Express' });
    res.send('Welcom to Wayfarer App. Lets get going......');
  });

  return router;
}

// module.exports = router;
