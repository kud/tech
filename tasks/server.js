var gutil = require("gulp-util")

module.exports = function() {
  gutil.log("Running server on: " + gutil.colors.cyan("http://localhost:3000"))

  // serve up public/ftp folder
  var serve = require("serve-static")("dist", {
    index: ["index.html", "index.htm"],
  })

  // create server
  var server = require("http").createServer(function(req, res) {
    var done = require("finalhandler")(req, res)
    serve(req, res, done)
  })

  // listen
  server.listen(3000)
}
