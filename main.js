var Express = require( 'express' );
var BodyParser = require( 'body-parser' );
var login = require('./server/app/login');
var token = require('./server/app/token');
login = login();
var app = Express( );

app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json( ) );
app.use( login.initialize( ) );
app.post(
    '/login',
    login.authenticate( 'localMio', { session: false } ),
    token()
);
app.get(
    '/userinfo',
    login.authenticate( 'bearer', { session: false } ),
    function ( request, response ) {
        var user = request.user;
        response.send( {
            id: user.id,
            username: user.username
        });
    }
);

app.listen( 8080, function( ) {
    console.log( 'Listening on port 8080' );
});