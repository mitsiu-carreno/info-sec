const fs = require('fs');

function encodeFile(path){
  const fileBuffer = fs.readFileSync(path);
  const encoded = fileBuffer.toString('base64')
  console.log('"'+encoded+'"');
  //return encoded;
}

function decodeFile(encoded, newFileName){
  const decoded = Buffer.from(encoded, 'base64');
  fs.writeFileSync(newFileName, decoded);
}

function encodeString(msg){
  const encoded = Buffer.from(msg).toString('base64');
  return encoded;
}

function decodeString(encoded){
  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  return decoded;
}


module.exports = { encodeFile, decodeFile, encodeString, decodeString };
