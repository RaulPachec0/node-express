//console.logs will be ran first and then the callback at the end

const { readFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
// console.log('starting next task')
