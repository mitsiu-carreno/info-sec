const crypto = require('crypto');
const assert = require('assert');
var DH;

function genPublicKey(p, g){
  DH = crypto.createDiffieHellman(Buffer.from(p, 'hex'), Buffer.from(g, 'hex'));
  return DH.generateKeys().toString('hex');
}

function genPrivateKey(publicKey){
  const secretKey = DH.computeSecret(Buffer.from(publicKey, 'hex'));
  return secretKey.toString('hex');
}

module.exports = { genPublicKey, genPrivateKey };



