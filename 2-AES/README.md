# Functions
- getKey()
- setKey(key)
- encrypt(msg)
- decrypt({iv:x, cyphertext:y, authTag:z})

# Example
```js
const aes = require('./AES.js')

aes.getKey()
'ce25b547b78eb2ab0ef1d64489ead6538adbd9097034798fb09a8b0ec2458ea3'

aes.setKey('1a4fdaafe4ba335fe55f519197291a35d2e6f81cb8dc213cdbc8a324cc095d1f')

const holaEncrypt = aes.encrypt('Hola');
holaEncrypt
{
  iv: 'k/GbosMV8DheGh7W',
  ciphertext: 'xBK4Kw==',
  authTag: 'g+dx8R7SmPPbjCLgb0nWbw=='
}

aes.decrypt(holaEncrypt)
'Hola'
```
 
