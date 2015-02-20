var finalhandler = require('finalhandler')
var http         = require('http')
var serveStatic  = require('serve-static')
var gutil        = require('gulp-util')

module.exports = function() {

  gutil.log('Running server on: ' + gutil.colors.cyan('http://localhost:3000') )

  // Serve up public/ftp folder
  var serve = serveStatic('dist', {'index': ['index.html', 'index.htm']})

  // Create server
  var server = http.createServer(function(req, res){
    var done = finalhandler(req, res)
    serve(req, res, done)
  })

  // Listen
  server.listen(3000)

}



