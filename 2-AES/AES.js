const crypto = require("crypto");

const algorithm = "aes-256-gcm";
// 32 bytes = 256-bit key
var key = crypto.randomBytes(32);


function getKey(){
  return key.toString('hex');
}


function setKey(newKey){
  key = Buffer.from(newKey, 'hex');
}


function encrypt(text) {
  // initialization vector
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("base64"),
    ciphertext: encrypted.toString("base64"),
    authTag: authTag.toString("base64")
  };
}

function decrypt(data) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(data.iv, "base64")
  );

  decipher.setAuthTag(Buffer.from(data.authTag, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(data.ciphertext, "base64")),
    decipher.final()
  ]);

  return decrypted.toString("utf8");
}

//const encrypted = encrypt("Hello secret world");

//console.log(encrypted);
//console.log(decrypt(encrypted));

module.exports = { encrypt, decrypt, getKey, setKey };

//const AES = require('./AES.js');
//AES.encrypt("Testing");
//AES.decrypt();
