/**
 * Imports
 */

var gulp   = require('gulp')
var lr     = require('tiny-lr')
var server = lr()
var del    = require('del')

/**
 * Private tasks
 */

gulp.task( 'clean', require(__dirname + '/tasks/clean') )
gulp.task( 'markup-global', require(__dirname + '/tasks/markup-global') )
gulp.task( 'markup-fr', require(__dirname + '/tasks/markup-fr') )
gulp.task( 'markup-en', require(__dirname + '/tasks/markup-en') )
gulp.task( 'markup', ['markup-global', 'markup-fr', 'markup-en'], function( cb ) {

  // crap hack
  gulp.src('./dist/fr/posts/fr/index.html')
    .pipe( gulp.dest('./dist/fr/') )

  gulp.src('./dist/en/posts/en/index.html')
    .pipe( gulp.dest('./dist/en/') )

  return del([
    './dist/fr/posts/',
    './dist/en/posts/'
  ])

})
gulp.task( 'styles', require(__dirname + '/tasks/styles') )
gulp.task( 'validate', require(__dirname + '/tasks/validate') )
gulp.task( 'scripts', ['validate'], require(__dirname + '/tasks/scripts') )
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

  require('monitorctrlc')()

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
