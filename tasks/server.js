var connect = require('connect')
var http    = require('http')
var gutil   = require('gulp-util')

module.exports = function() {

  gutil.log('Running server on: ' + gutil.colors.cyan('http://localhost:3000') )

  var app = connect()
    .use( connect.static('dist') )

  http.createServer( app ).listen( 3000 )

  // opn('http://localhost:3000')

}



