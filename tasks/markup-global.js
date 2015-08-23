var Metalsmith  = require('metalsmith')
var permalinks  = require('metalsmith-permalinks')
var markdown    = require('metalsmith-markdown')
var templates   = require('metalsmith-templates')
var ignore      = require('metalsmith-ignore')
var collections = require('metalsmith-collections')
var metallic    = require('metalsmith-metallic')
var moment      = require('moment')

module.exports = function(cb) {

  var debug = function( files, metalsmith, done ) {
    console.log(files)
    done()
  }

  // order is important here
  Metalsmith( __dirname + '/..' )
    .use(
      ignore([
        '**/.DS_Store',
        'images/**/*',
        'posts/**/*',
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
    // .use( debug )
    .use(
      templates({
        engine: 'jade',
        directory: 'src/templates',
        moment: moment
      })
    )
    .clean( false )
    .destination('./dist/')
    .build(function(err) {
      if (err) throw err
      cb()
    })


}
