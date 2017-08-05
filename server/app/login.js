
    var users = {
    foo: {
        username: 'foo',
        password: 'bar',
        id: 1
    },
    bar: {
        username: 'bar',
        password: 'foo',
        id: 2
    },
    gcorreageek: {
        username: 'gcorreageek@gmail.com',
        password: '123456',
        id: 3
    }
}
console.log('haber:'+users['bar'].username);
    console.log('haber:'+users['bar'].username);

var LocalStrategy = require( 'passport-local' ).Strategy;   
var Passport = require( 'passport' );

var localStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    user = users[ username ];
    if ( user == null ) {
        return done( null, false, { message: 'Invalid user' } );
    }
    if ( user.password !== password ) {
        return done( null, false, { message: 'Invalid password' } );    
    }
    done( null, user );
  }
)
module.exports = function(){
    Passport.use( 'localMio', localStrategy );  
    return Passport;
}
