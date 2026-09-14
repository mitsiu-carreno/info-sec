const crypto = require('crypto');
const assert = require('assert');

const DH = crypto.createDiffieHellman(2048);


function getP(){
  return DH.getPrime().toString('hex');
}

function getG(){
  return DH.getGenerator().toString('hex');
}

function validateSecrets(aKey, bKey){
  return assert.equal(aKey, bKey);
}

module.exports = { getP, getG, validateSecrets };


