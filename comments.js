//create web server
const http = require('http');
const port = 3000;
const fs = require('fs');
const path = require('path');
//create server
const server = http.createServer((req, res) => {
    //check the url
    if(req.url === '/'){
        //set the content type
        res.writeHead(200, {'Content-Type': 'text/html'});
        //read the file
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    }else if
