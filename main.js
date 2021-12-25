const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end('Welcome to Skefoss!')
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});