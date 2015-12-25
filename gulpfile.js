/**
 * Imports
 */

var gulp       = require('gulp')
var livereload = require('gulp-livereload')
var del        = require('del')

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
gulp.task('watch', ['compile'], function() {

  gulp.start('server')

  require('monitorctrlc')() // handle ctrl+c

  livereload.listen()

  gulp.watch([
      'src/**/*',
      '!src/images/**/*',
      '!src/scripts/**/*',
      '!src/styles/**/*'
    ], function() {
      gulp.start('markup', function() {
        livereload.reload()
      })
    }
  )

  gulp.watch([
      'src/**/*.js'
    ], ['scripts'])

  gulp.watch([
      'src/**/*.css'
    ], ['styles'])

  gulp.watch([
      'src/images/**/*'
    ], function() {
      gulp.start('images', function() {
        livereload.reload()
      })
    }
  )

})

// default
gulp.task('default', ['watch'])
