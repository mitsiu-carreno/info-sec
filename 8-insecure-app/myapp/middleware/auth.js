function auth(req, res, next) {
  const expectedToken = Buffer.from('access.exe has stoped rejecting you').toString('base64');

  const authorization = req.cookies.auth;

  if (authorization !== expectedToken) {
    return res.redirect('/login')
  }

  next();
}

module.exports = auth;
