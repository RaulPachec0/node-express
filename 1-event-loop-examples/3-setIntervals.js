// Asynconous = console logs first than callbacks

setInterval(() => {
    console.log('hello world')
}, 2000)
console.log('I will run first')
// process stays alive unless
// kill process CTRL + C
// Unexpected Error