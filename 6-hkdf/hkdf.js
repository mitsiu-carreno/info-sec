const crypto = require("node:crypto");

const sharedSecretNumber = 2;

const sharedSecret = Buffer.alloc(32);
sharedSecret.writeUInt32BE(sharedSecretNumber, 28);

const salt = Buffer.from("salt-clase-diffie-hellman");
const info = Buffer.from("aes-256-gcm");

const aesKey = Buffer.from(
  crypto.hkdfSync(
    "sha256",
    sharedSecret,
    salt,
    info,
    32
  )
);

console.log("Secreto DH:", sharedSecretNumber);
console.log("Clave AES:", aesKey.toString("hex"));
