const http = require('http');

http.createServer( (req, res ) => {
    
    // res.writeHead(200, {"Content-type": "application/json"} );
    
    // const persona = {
    //     id : 1,
    //     nombre: 'Johanny'
    // };
    // res.write(JSON.stringify( persona ));
    res.write('Hola Mundo!');
    res.end();

})
.listen( 8080 );

console.log("Escuchando el puerdo 8080");