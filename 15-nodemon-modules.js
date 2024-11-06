// npm - global command, comes with node
// node --version

// local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - maniffest file (stores important info about project/package)
//manual approach (create package.kson in the root, create properties etc)
//npm init (step by step press enter to skip)

// easiest way: npm init -y
// then edit it when it appears

// when cloing I run npm install. this will read package.json 
// and will download what it needs. node_modules folder is ignored
// node_module is massive

const _ = require('lodash');

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('Hello People')
