var Metalsmith  = require('metalsmith')
var permalinks  = require('metalsmith-permalinks')
var markdown    = require('metalsmith-markdown')
var templates   = require('metalsmith-templates')
var ignore      = require('metalsmith-ignore')
var collections = require('metalsmith-collections')
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
        'images/**/*',
        'styles/**/*',
        'templates/**/*',
        'posts/drafts/**/*'
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
    .destination('./dist')
    .build(function(err) {
      if (err) throw err
      cb()
    })


}

