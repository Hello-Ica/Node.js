// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

//gloabal dependency -use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//packaye.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const EventEmitter = require('events')

const customEmitter = new EventEmitter()




customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} with id:${id}`)
})

customEmitter.on('response', () =>{
  console.log('some other logic here')
})
customEmitter.emit('response', 'john', 34)