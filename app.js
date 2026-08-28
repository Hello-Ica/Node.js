
// CommonJS, every file is a module (by default)
// Modules Encapaulated Code (only sgare minimum)


const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(sayHi)
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)