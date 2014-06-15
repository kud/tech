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

gulp.task( 'markup', function(cb) {
  var Metalsmith  = require('metalsmith')
  var permalinks  = require('metalsmith-permalinks')
  var markdown    = require('metalsmith-markdown')
  var templates   = require('metalsmith-templates')
  var ignore      = require('metalsmith-ignore')
  var collections = require('metalsmith-collections')
  var moment      = require('moment')

  var debug = function( files, metalsmith, done ) {
    console.log(files)
    done()
  }

  // order is important here
  var metalsmith = Metalsmith( __dirname )
    .use(
      ignore([
        'styles/**/*',
        'templates/**/*'
      ])
    )
    .use(
      markdown({
        smartypants: true,
        gfm: true,
        tables: true
      })
    )
    .use(
      collections({
        posts: {
          pattern: 'src/posts/*.md',
          sortBy: 'date',
          reverse: true
        }
      })
    )
    .use(
      permalinks({
        pattern: ':title'
      })
    )
    // .use( debug )
    .use(
      templates({
        engine: 'jade',
        directory: 'src/templates',
        moment: moment
      })
    )
    .clean( false )
    .destination('dist')
    .build(function() {
      cb()
    })
})

gulp.task( 'styles', require(__dirname + '/tasks/styles') )
gulp.task( 'jshint', require(__dirname + '/tasks/jshint') )
gulp.task( 'scripts', ['jshint'], require(__dirname + '/tasks/scripts') )
gulp.task( 'server', require(__dirname + '/tasks/server') )
gulp.task( 'deploy', ['compile'], require(__dirname + '/tasks/deploy') )

/**
 * Public tasks
 */

// compile files
gulp.task('compile', ['clean', 'markup', 'scripts', 'styles'])

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
