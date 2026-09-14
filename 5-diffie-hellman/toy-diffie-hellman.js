//const p =
//const g =

const privateKey = Math.floor(Math.random() * 10);


function genPublicKey(p, g){
  const publicKey = (g ** privateKey) % p;
  return publicKey;
}

function genSharedSecret(p, other_publicKey){
  const shared_secret = (other_publicKey ** privateKey) % p;
  return shared_secret;
}


module.exports = { privateKey, genPublicKey, genSharedSecret };
