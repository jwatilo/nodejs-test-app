var http = require( 'http' ) ;
var port = process.env.PORT     || 8080 ;
var host = process.env.HOSTNAME || 'localhost' ;
var cnt  = 0 ;

function handleRequest( request, response ) {

    console.log( 'New connection' ) ;
    ++cnt ;
    response.writeHead( 200, {'Content-Type': 'text/plain'} ) ;
    response.end( 'Welcome to the Node.js Test Application for OpenShift!!!\n'
                + 'I am running on host: ' + host + '\n' 
                + 'You are visitor number ' + cnt + '!\n'
                + 'Come back ANY time...\n'
                ) ;
}

var server = http.createServer( handleRequest ) ;

server.listen( port
             , function() {
                   console.log( 'INFO     nodejs-test-app: Listening on: http://%s:%s', host, port ) ;
               }
             ) ;
