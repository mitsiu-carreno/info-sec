var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: {}});
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/login', function(req, res, next) {
  console.log(req.body)
  try{
    const user = db.prepare(
      `SELECT * FROM users WHERE email = '${req.body.user.email}' AND password = '${req.body.user.password}'`
    ).all();
    
    if(!user){
      return res.sendStatus(404);
    }


    res.json(user);
  }
  catch(err){
    next(err);
  }
});

router.get('/registerBack', function(req, res, next) {
  console.log(req.query);
  try{
    const result = db.prepare(
      `INSERT INTO users (email, password) VALUES ('${req.query.email}', '${req.query.password}')`
    ).run();

    return res.sendStatus(201).send(result.lastInsertRowid);
    
  }
  catch(err){
    next(err);
  }
});

module.exports = router;
