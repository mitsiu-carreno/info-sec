# Intro
This repo is a collection of several algorithms presented during class.

## Structure
Each algorithm has it's own directory and specific README.md explaining in creater detail the specific usage

## Prerequisites
- Node installed
- Python installed

## Usage
In a broad sence open up a terminal at this directory and install node dependencies:
```bash
npm install
```
and python dependencies
```bash
pip install -r requirements.txt

```

### Node
Then you can start a node REPL session with
```bash
node
```
and load any algorithm to use the exposed functions:
```
const RotN = require('./1-RotN/RotN.js')
RotN.encrypt(3, 'Hola')
```

you can explore the exposed functions opening the file (e.g. 1-RotN/RotN.js) and searching the:
```js
module.exports = { encrypt };
```

Finally you can exit the node REPL with
```bash
.exit
```

### Python
You can run any python script with:
```bash
python 2-AES/AES.py
``` 
