const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js server!');
  if(req.url=='/about'){
    res.end("about page");
  } else if(req.url='./contact'){
    res.end('about page');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
