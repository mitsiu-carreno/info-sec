const crypto = require('crypto')

const algorithm = "aes-256-gcm";
var DH = crypto.createDiffieHellman(2048);

var aesKey = null;

function getP(){
  return DH.getPrime().toString('hex');
}

function getG(){
  return DH.getGenerator().toString('hex');
}

function genPublicKey(p, g){
  DH= crypto.createDiffieHellman(
    Buffer.from(p, 'hex'),
    Buffer.from(g, 'hex')
  );

  return DH.generateKeys().toString('hex');
}

function genSharedSecret(peerPublicKey){
  const sharedSecret = DH.computeSecret(Buffer.from(peerPublicKey, 'hex'));

  const salt = Buffer.from("salt-clase-dh");
  const info = Buffer.from("wa/v1/aes-256-gcm");

  aesKey = Buffer.from(
    crypto.hkdfSync(
      "sha256",
      sharedSecret,
      salt,
      info,
      32
    )
  );

  console.log("Secreto dh:", sharedSecret);
  console.log("Clave AES:", aesKey.toString('hex'));
}

function encrypt(msg){

  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(
algorithm, aesKey, iv);

  const encrypted = Buffer.concat([
    cipher.update(msg, "uft-8"),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("base64"),
    ciphertext: encrypted.toString("base64"),
    authTag: authTag.toString("base64")
  };
}

function decrypt(data){
  const decipher = crypto.createDecipheriv(
    algorithm,
    aesKey,
    Buffer.from(data.iv, "base64")
  );

  decipher.setAuthTag(Buffer.from(data.authTag, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(data.ciphertext, "base64")),
    decipher.final()
  ]);

  return decrypted.toString("utf-8")
}

module.exports = {getP, getG, genPublicKey, genSharedSecret, encrypt, decrypt };
