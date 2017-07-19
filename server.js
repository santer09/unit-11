/**
 * Created by Erick on 7/19/2017.
 */
//will load the core http module from the server
var http = require('http')
//the port number for the node is assigned to 1337 because the environment is not set
var port = process.env.PORT||8001
//creates a server and a callback function which contains the response handler
var server = http.createServer(function(req, res){
    //set the right header and status code
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Hello World, my name is Erick Santos\n')
    res.end('Hello World, my name is Erick Santos\n')
})
//sets a port and display the address of the server and the port number
server.listen(port, function(){
    console.log('Server is runnin at %s:%s',
    server.address().address, server.address().port)
})