var gutil = require('gulp-util')

module.exports = function(cb) {

  var debug = function( files, metalsmith, done ) {
    console.log(files)
    done()
  }

  // order is important here
  require('metalsmith')( __dirname + '/..' )
    .use(
      require('metalsmith-ignore')([
        '**/.DS_Store',
        'images/**/*',
        'posts/**/*',
        'styles/**/*',
        'templates/**/*'
      ])
    )
    .use(
      require('metalsmith-markdown')({
        smartypants: true,
        gfm: true,
        tables: true
      })
    )
    // .use( debug )
    .use(
      require('metalsmith-layouts')({
        engine: 'jade',
        directory: 'src/templates',
        moment: require('moment'),
        NODE_ENV: gutil.env.dist ? 'production' : 'development'
      })
    )
    .clean( false )
    .destination('./dist/')
    .build(function(err) {
      if (err) throw err
      cb()
    })


}
