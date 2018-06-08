const app = require('./app');
const http = require('http');
const port = 3000;

http.createServer(app).listen(port);