var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
const db = require('../db');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { user: {}});
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/', auth, function(req, res, next) {
  res.render('index');
});

router.post('/login', function(req, res, next) {
  try{
    const user = db.prepare(
      `SELECT * FROM users WHERE email = '${req.body.user.email}' AND password = '${req.body.user.password}'`
    ).get();
    
    if(!user){
      return res.sendStatus(404).send('Invalid credentials');
    }

    res.cookie('auth', Buffer.from('access.exe has stoped rejecting you').toString('base64'),{
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    });

    return res.redirect('/');
  }
  catch(err){
    next(err);
  }
});

router.get('/registerBack', function(req, res, next) {
  try{
    const result = db.prepare(
      `INSERT INTO users (email, password) VALUES ('${req.query.email}', '${req.query.password}')`
    ).run();

    res.cookie('auth', Buffer.from('access.exe has stoped rejecting you').toString('base64'),{
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    });

    return res.redirect('/');
    
  }
  catch(err){
    next(err);
  }
});

router.get("/search", auth, function(req, res, next) {
  try{
    const result = db.prepare(
      `SELECT * FROM users WHERE email LIKE '%${req.query.email}%'`
    ).all();

    return res.json(result);
  }
  catch(err){
    next(err);
  }
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('auth', { path: '/'});
  res.redirect('/login');
});

module.exports = router;
