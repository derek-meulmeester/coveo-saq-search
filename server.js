var http = require('http');
var fs = require("fs");

const PORT = process.argv[2] || 8000;

//We need a function which handles requests and send response
function handleRequest(req, res){
    var fileName = '.' + req.url;
    if (!req.url.includes('.')) {
        fileName += (fileName.endsWith('/') ? 'index.html' : '/index.html');
    }

    /** Default to text/plain */
    var contentType = 'text/plain';
    var respCode = 200;

    /** HTML */
    if (fileName.endsWith('.html')) {
        contentType = 'text/html';
    }
    /** JavaScript */
    else if (fileName.endsWith('.js')) {
        contentType = 'application/javascript';
    }
    /** CSS */
    else if (fileName.endsWith('.css')) {
        contentType = 'text/css';
    }
    /** JPEG */
    else if (fileName.endsWith('.jpeg' || fileName.endsWith('.jpg'))) {
        contentType = 'image/jpeg';
    }
    /** GIF */
    else if (fileName.endsWith('.gif')) {
        contentType = 'image/gif';
    }

    fs.readFile(fileName, "utf8", function(err, data) {
        if (err) {
            respCode = 404;
            res.writeHead(respCode, {
                'Content-Type': contentType
            });
            res.write(`This is probably a 404 - Error: ${err}`);

        } else {
            res.writeHead(respCode, {
                "Content-Type": contentType
            });
            res.write(data);
        }

        console.log(`${respCode} - ${req.method}: ${fileName}`);
        res.end();
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});