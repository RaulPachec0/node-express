const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to my home page');
        return;
    }
    if(req.url === '/about'){
        res.end('This is my short history');
        return;
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We Cant find the page you are looking for</p>
        <a href="/">Home</a>
        `);
        return;
})

server.listen(5000)