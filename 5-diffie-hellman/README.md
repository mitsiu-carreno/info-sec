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
| ```js const AtoyDH = require('./toy-diffie-hellman.js') ``` | ```js const BtoyDH = require('./toy-diffie-hellman.js') ``` |
| ```js AtoyDH.privateKey ``` | ```js BtoyDH.privateKey ``` |
| ```js 0 ``` | ```js 9 ``` |
| ```js AtoyDH.genPublicKey(17,3) ``` | ```js BtoyDH.genPublicKey(17,3) ``` |
| ```js 1 ``` | ```js 14 ``` |
| ```js AtoyDH.genSharedSecret(17, 14) ``` | ```js BtoyDH.genSharedSecret(17, 1) ``` |
| ```js 1 ``` | ```js 1 ``` |


| ```js a ``` | ```js a ``` |
| ```js a ``` | ```js a ``` |
| ```js a ``` | ```js a ``` |
| ```js a ``` | ```js a ``` |

