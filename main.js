var Express = require( 'express' );
var BodyParser = require( 'body-parser' );
var login = require('./server/app/login');
login = login();
var app = Express( );

app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json( ) );
app.use( login.initialize( ) );
app.post(
    '/login',
    login.authenticate( 'localMio', { session: false } ),
    function ( request, response ) {
        response.send( 'User Id ' + request.user.id );
    }
);
app.listen( 8080, function( ) {
    console.log( 'Listening on port 8080' );
});