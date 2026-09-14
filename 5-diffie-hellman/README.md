# Toy implementation

## Attributes
- privateKey

## Functions
- genPublicKey(p, g)
- genSharedSecret(p, other_publicKey)

## Example
Select a pair p, g

| p Prime | g Generator | Level |
|---------|-------------|-------|
| 11      | 2           | I     |
| 13      | 2           | I     |
| 17      | 3           | II    |
| 19      | 2           | II    |
| 23      | 5           | II    |
| 29      | 2           | II    |
| 31      | 3           | III   |
| 37      | 2           | III   |
| 41      | 6           | III   |
| 47      | 5           | III   |

This script require two terminals running the script

| Terminal A     | Terminal B     |
|----------------|----------------|
| ```const AtoyDH = require('./toy-diffie-hellman.js') ``` | ```js const BtoyDH = require('./toy-diffie-hellman.js') ``` |
| ```AtoyDH.privateKey ``` | ```BtoyDH.privateKey ``` |
| ```0 ``` | ```9 ``` |
| ```AtoyDH.genPublicKey(17,3) ``` | ```BtoyDH.genPublicKey(17,3) ``` |
| ```1 ``` | ```14 ``` |
| ```AtoyDH.genSharedSecret(17, 14) ``` | ```BtoyDH.genSharedSecret(17, 1) ``` |
| ```1 ``` | ```1 ``` |


# Real impelmentation

## Functions
- getP                                  (Server)
- getG                                  (Server)
- validateSecrets                       (Server)
- genPublicKey(p, g)                    (Client)
- getnPrivateKey(others_publicKey)      (Client)

## Example

| Client A     |  Server     | Client B     |
|--------------|-------------|--------------|
|  | ```const DHServer = require('./real-server-diffiehellman.js')``` |  |
|  | ```DHServer.getP() ``` |  |
|  | ```'84d84b1add0661...'``` |  |
|  | ```DHServer.getG()``` |  |
| ```const DHAlice = require('./real-client-diffiehellman.js') ``` | ```'02'``` | ```const DHBob = require('./real-client-diffiehellman.js')``` |
| ```DHAlice.genPublicKey('84d84b1add0661...', '02') ``` |  | ```DHBob.genPublicKey('84d84b1add0661...', '02')``` |
| ```'205426821b5851...'``` |  | ```'59f104498c0b19...'``` |
| ```DHAlice.genPrivateKey('59f104498c0b19...')``` |  | ```DHBob.genPrivateKey('205426821b5851...')``` |
| ```'1322b08454f31a...'``` |  | ```'1322b08454f31a...'``` |
| ```a ``` | ``` ``` | ```a ``` |
| ```a ``` | ``` ``` | ```a ``` |

