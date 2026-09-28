# Functions
- getP()
- getG()
- genPublicKey(P, G);
- genSharesSecret(peerPublicKey);
- encrypt(msg)
- decrypt({iv:..., cipherText:..., authTag:...})

# Example
| Alice     | Bob     |
|----------------|----------------|
| ```const alice = require('./client.js')``` | ```const bob = require('./client.js')``` |
| `````` | ```bob.getP()``` |
| `````` | ```'8571bc73c3...'``` |
| `````` | ```bob.getG()``` |
| `````` | ```'02'``` |
| ```alice.genPublicKey('8571bc73c3...', '02')``` | ```bob.genPublicKey('8571bc73c3...', '02')``` |
| ```'34c9842bd60cb...'``` | ```'69d832aef64fde4...'``` |
| ```alice.genSharedSecret('69d832aef64fde4...')``` | ```bob.genSharedSecret('34c9842bd60cb...')``` |
| ```Clave AES: 91a402489cfdab``` | ```Clave AES: 91a402489cfdab``` |
| `````` | ```bob.encrypt("Hola!!!!")``` |
| `````` | ```{iv: '0+Fvtp620LFd0oMk', ciphertext: 'msHQxo+M3QU=', authTag: 'NDFQ9ENszzzZ5reiZjuuig=='}``` |
| ```alice.decrypt({ iv: '0+Fvtp620LFd0oMk', ciphertext: 'msHQxo+M3QU=', authTag: 'NDFQ9ENszzzZ5reiZjuuig=='})``` | `````` |
| ```"Hola!!!"``` | `````` |
