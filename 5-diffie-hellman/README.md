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
| ``` ``` | ```const DHServer = require('./real-server-diffiehellman.js')``` | ``` ``` |
| ``` ``` | ```DHServer.getP() ``` | ``` ``` |
| ``` ``` | ```'84d84b1add06619b08fa444a25db6b9b6f1e93cebc81e7f2c61ed2ddf70d79b4866804b43488f35f5786300be7fea0e0658ac97082c7f7e2391d05929fad90eac4728fa1f7c50a57636af5f0fe3ce3d5229d2e36def257958b1ab06419b8e6c3c580fcf203a3a3500a000e404b91854a274e92601ca0baa382ff7713c731ed2f7035fd3ab8ee5f21ff59121d57d62be1254da8d37254d49dfac72d7f587655dd9fc209f385c833f6450aee07eb2019ff44dbbfa562ef2d7ce22f8de25362837440d5a79484a24271a771aad726835bb034a5871d03602001ee8fb6391659efb1ee9f4524b982425faa78752c8a7e0e8c5fa15e2cccfda86354a58359ee07f95f'``` | ``` ``` |
| ``` ``` | ```DHServer.getG()``` | ``` ``` |
| ```const DHAlice = require('./real-client-diffiehellman.js') ``` | ```'02'``` | ```const DHBob = require('./real-client-diffiehellman.js')``` |
| ``` ``` | ``` ``` | ```a ``` |
| ```DHAlice.genPublicKey('84d84b1add06619b08fa444a25db6b9b6f1e93cebc81e7f2c61ed2ddf70d79b4866804b43488f35f5786300be7fea0e0658ac97082c7f7e2391d05929fad90eac4728fa1f7c50a57636af5f0fe3ce3d5229d2e36def257958b1ab06419b8e6c3c580fcf203a3a3500a000e404b91854a274e92601ca0baa382ff7713c731ed2f7035fd3ab8ee5f21ff59121d57d62be1254da8d37254d49dfac72d7f587655dd9fc209f385c833f6450aee07eb2019ff44dbbfa562ef2d7ce22f8de25362837440d5a79484a24271a771aad726835bb034a5871d03602001ee8fb6391659efb1ee9f4524b982425faa78752c8a7e0e8c5fa15e2cccfda86354a58359ee07f95f', '02') ``` | ``` ``` | ```DHBob.genPublicKey('84d84b1add06619b08fa444a25db6b9b6f1e93cebc81e7f2c61ed2ddf70d79b4866804b43488f35f5786300be7fea0e0658ac97082c7f7e2391d05929fad90eac4728fa1f7c50a57636af5f0fe3ce3d5229d2e36def257958b1ab06419b8e6c3c580fcf203a3a3500a000e404b91854a274e92601ca0baa382ff7713c731ed2f7035fd3ab8ee5f21ff59121d57d62be1254da8d37254d49dfac72d7f587655dd9fc209f385c833f6450aee07eb2019ff44dbbfa562ef2d7ce22f8de25362837440d5a79484a24271a771aad726835bb034a5871d03602001ee8fb6391659efb1ee9f4524b982425faa78752c8a7e0e8c5fa15e2cccfda86354a58359ee07f95f', '02')``` |
| ```'205426821b585112e315a4315e7415015e88baefeb87e9899da99cb24b9c01aa02fa1c3d3da6b6410a83d9b080406f41658a250a4470452dcab4523b299bbb9a99e105b2d6ae41cd3fcbc0dc56b35660938ab6cbc428bc8026ce6b3160784b3c2a2126a887bae6c8ea39fa31c64d525cbb98f27b531c92114e74067ce1a56b20014a1f62e71d5815e40737f5fd7e3b20caf31e1615864e5ca253e15c05c140daa3f6d24972175dd909ab9086ae1e7da2e4ebd73912a74afed5ced983082ff46c3d12a05e8a300ad6204a18fa1206f41af82bb917621926f9f8bb49d3291e97673454f8e93736890e998fdeb4e8a4e217e8a558e7353883dd380eea84472c9ff1'``` | ``` ``` | ```'59f104498c0b19639777f8a607912af132458179656849045a11916b1dcaf1a92c7790becd976d024207a1173d5e2e82a2833b064c4b9b6c44560fe0bb525d5db1048019f0b64f9d476dce9920f5d250f8e47eb404f7144e3902702348b7072aa541a6cf00f7c16a548beb5745130fd062ed23c511f788bbb5a1494f112f3a9ffd541bb25183e5f4e0a693bef72a4ddddca6f747c348e1a848723735b2e3ef5d443a4166e1a4540d8900e674fb809fa3cfb5e8c7859f3c29ce09e4fc79a28bc2e925b124b2551a86b40e7336bdae7c1ce7cab29505fa46da9c974634514a2c0dbcf30d4ae801ca7fd3240e0a1721ca33951b96b178467e264fa1255454bdebcd'``` |
| ```DHAlice.genPrivateKey('59f104498c0b19639777f8a607912af132458179656849045a11916b1dcaf1a92c7790becd976d024207a1173d5e2e82a2833b064c4b9b6c44560fe0bb525d5db1048019f0b64f9d476dce9920f5d250f8e47eb404f7144e3902702348b7072aa541a6cf00f7c16a548beb5745130fd062ed23c511f788bbb5a1494f112f3a9ffd541bb25183e5f4e0a693bef72a4ddddca6f747c348e1a848723735b2e3ef5d443a4166e1a4540d8900e674fb809fa3cfb5e8c7859f3c29ce09e4fc79a28bc2e925b124b2551a86b40e7336bdae7c1ce7cab29505fa46da9c974634514a2c0dbcf30d4ae801ca7fd3240e0a1721ca33951b96b178467e264fa1255454bdebcd')``` | ``` ``` | ```DHBob.genPrivateKey('205426821b585112e315a4315e7415015e88baefeb87e9899da99cb24b9c01aa02fa1c3d3da6b6410a83d9b080406f41658a250a4470452dcab4523b299bbb9a99e105b2d6ae41cd3fcbc0dc56b35660938ab6cbc428bc8026ce6b3160784b3c2a2126a887bae6c8ea39fa31c64d525cbb98f27b531c92114e74067ce1a56b20014a1f62e71d5815e40737f5fd7e3b20caf31e1615864e5ca253e15c05c140daa3f6d24972175dd909ab9086ae1e7da2e4ebd73912a74afed5ced983082ff46c3d12a05e8a300ad6204a18fa1206f41af82bb917621926f9f8bb49d3291e97673454f8e93736890e998fdeb4e8a4e217e8a558e7353883dd380eea84472c9ff1')``` |
| ```'1322b08454f31a66e2597211b92ea49c20cb00aa03c418139e10a57f0cf512ae57b6f4a1b8babc34115779a55c1ffa8470c9305e0ca4eb8860d51541710d9f689acab1a538b651b129802532068465dab8e3962c615070f83ff00c0cd85281d6e680c1c458f35cc66589d0c8a58f8538b69ece76cf7a96196c95503241f14011ac7da86d9c059c4268ec107a55e824f6e6f4dd9bd08c9f7949e59be3051aa7b5aa84ea6c1d44814650a0bd60a260f19e87e98c8447617d35bcae576240e5191aaf742b37e2ea87948fc396bf13d5a625cbfc3c7f015170713420547e208090b015ed900233a7eff0697a521a0b05be7d7bd5a42344528219bbeebb2202be0056'``` | ``` ``` | ```'1322b08454f31a66e2597211b92ea49c20cb00aa03c418139e10a57f0cf512ae57b6f4a1b8babc34115779a55c1ffa8470c9305e0ca4eb8860d51541710d9f689acab1a538b651b129802532068465dab8e3962c615070f83ff00c0cd85281d6e680c1c458f35cc66589d0c8a58f8538b69ece76cf7a96196c95503241f14011ac7da86d9c059c4268ec107a55e824f6e6f4dd9bd08c9f7949e59be3051aa7b5aa84ea6c1d44814650a0bd60a260f19e87e98c8447617d35bcae576240e5191aaf742b37e2ea87948fc396bf13d5a625cbfc3c7f015170713420547e208090b015ed900233a7eff0697a521a0b05be7d7bd5a42344528219bbeebb2202be0056'``` |
| ```a ``` | ``` ``` | ```a ``` |
| ```a ``` | ``` ``` | ```a ``` |

