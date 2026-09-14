# Attributes
- key
# Functions
- encrypt
- decrypt

# Example
```js
const aes = require('./AES.js')

aes.key.toString('hex')
'ce25b547b78eb2ab0ef1d64489ead6538adbd9097034798fb09a8b0ec2458ea3'

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
 
