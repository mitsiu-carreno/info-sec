# Javascript
## Functions
- encodeFile(path)
- decodeFie(encodedB64, newFileName)
- encodeString(msg)
- decodeString(encodedB64)
- htmlImg(path)

## Example

```js
const b64 = require('./b64.js')

b64.encodeString("hola")
'aG9sYQ=='

b64.decodeString('aG9sYQ==')
'hola'

b64.encodeFile('adoptMe.jpg')
"/9j/4AAQSkZJRgA..."

b64.decodeFile("/9j/4AAQSkZJRgA...", "newImage.jpg")
```

# Shell
```bash
echo "hola" | base64 
aG9sYQo=

echo "aG9sYQo=" | base64 -d
hola

cat adoptMe.jpg| base64
/9j/4AAQSkZJRgA...

echo "/9j/4AAQSkZJRgA..." | base64 -d -o otherNewImage.jpg
`` `

# Html image tag
<img src="data:image/png;base64,/9j/4AAQSkZJRgA...">
