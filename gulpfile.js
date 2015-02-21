/**
 * Imports
 */

var gulp   = require('gulp')
var lr     = require('tiny-lr')
var server = lr()

/**
 * Private tasks
 */

gulp.task( 'clean', require(__dirname + '/tasks/clean') )
gulp.task( 'markup', require(__dirname + '/tasks/markup') )
gulp.task( 'styles', require(__dirname + '/tasks/styles') )
gulp.task( 'jshint', require(__dirname + '/tasks/jshint') )
gulp.task( 'scripts', ['jshint'], require(__dirname + '/tasks/scripts') )
gulp.task( 'images', require(__dirname + '/tasks/images') )
gulp.task( 'server', require(__dirname + '/tasks/server') )
gulp.task( 'deploy', ['compile'], require(__dirname + '/tasks/deploy') )

/**
 * Public tasks
 */

// compile files
gulp.task('compile', ['clean', 'markup', 'images', 'scripts', 'styles'])

// watch files
gulp.task('watch', ['server', 'compile'], function() {

  server.listen(35729, function (err) {
    if ( err ) {
      return console.log( err )
    }

    gulp.watch( [
        'src/**/*.md',
        'src/**/*.jade',
        'templates/**/*.md',
        'templates/**/*.jade'
      ], function() {
      gulp.start('markup')
    })

    gulp.watch( ['src/**/*.js'], function(){
      gulp.start('scripts')
    })

    gulp.watch( ['src/**/*.css'], function(){
      gulp.start('styles')
    })
  })

})

// default
gulp.task('default', ['watch'])
