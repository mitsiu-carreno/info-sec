const bcrypt = require('bcrypt');
const saltRounds = 10;
var hash = "";

function register(passwordPlainText){
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log(salt);
  hash = bcrypt.hashSync(passwordPlainText, salt);
  return hash;
}

function login(attemptPasswordPT){
  /*
  const saltRecuperado = hash.substring(0,29);
  const attemptHash = bcrypt.hashSync(attemptPasswordPT, saltRecuperado);

  if (hash === attemptHash){
    return true;
  }
  return false;
  */
  return bcrypt.compareSync(attemptPasswordPT, hash);
}

module.exports= { register, login };
