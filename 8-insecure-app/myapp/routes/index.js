var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
const db = require('../db');
const multer = require('multer');
const { exec } = require('node:child_process');
const path = require('node:path');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 }
});

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
      httpOnly: false,
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
      httpOnly: false,
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


router.get('/logs', auth, function(req, res, next) {
  const filter = req.query.filter || '';

  // Intentionally vulnerable command construction.
  const command = `grep "${filter}" /var/log/nginx/access.log`;

  console.log(command);
  exec(command, { maxBuffer: 1024 * 1024 }, function(error, stdout, stderr) {
    // grep returns exit code 1 when no lines match.
    if (error && error.code !== 1) {
      return next(error);
    }

    const logs = stdout
      .split('\n')
      .filter(line => line.length > 0);

    res.render('logs', {
      title: 'Nginx Access Logs',
      filter: filter,
      logs: logs
    });
  });
});

router.get('/avatar', (req, res) => {
  res.render('avatar');
});

router.post('/avatar', upload.single('avatar'), function(req, res, next) {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const outputFile = path.join('uploads', req.file.originalname);

  // Intentionally insecure command construction.
  const command = `magick - -resize 200x200 "${outputFile}"`;

  console.log(command);
  const child = exec(command, function(error, stdout, stderr){
    if (error) {
      return next(error);
    }

    res.json({ success: true });
  });
  
  child.stdin.end(req.file.buffer);
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('auth', { path: '/'});
  res.redirect('/login');
});

module.exports = router;
