var lr           = require('tiny-lr')
var server       = lr()
var gulp         = require('gulp')
var plumber      = require('gulp-plumber')
var browserify   = require('gulp-browserify')
var livereload   = require('gulp-livereload')

module.exports = function() {

  return gulp.src('src/scripts/index.js')
    .pipe( plumber() )
    .pipe( browserify({
      insertGlobals : true,
      debug : true
    }) )
    .pipe( gulp.dest('dist') )
    .pipe( livereload( server ) )

}


