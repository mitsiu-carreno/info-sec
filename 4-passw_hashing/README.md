# Functions
- register
- login

# Example
```js
const hashing = require('./password_hashing.js')
hashing.register("gatitos.123")
e2b$10$iVrYOnbsg6hJQtm5CuFbpO                                       // <---- Salt
'$2b$10$iVrYOnbsg6hJQtm5CuFbpOckFeNFruh/eijiWWHqAWGbbKCIguvZK'      // <---- Hash

hashing.login('gatitos.124')
false
hashing.login('gatitos.123')
true
```
