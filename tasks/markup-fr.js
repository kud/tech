var Metalsmith  = require('metalsmith')
var permalinks  = require('metalsmith-permalinks')
var markdown    = require('metalsmith-markdown')
var templates   = require('metalsmith-templates')
var ignore      = require('metalsmith-ignore')
var collections = require('metalsmith-collections')
var metallic    = require('metalsmith-metallic')
var moment      = require('moment')
var gulp        = require('gulp')
var rimraf      = require('rimraf')

module.exports = function( cb ) {

  var debug = function( files, metalsmith, done ) {
    console.log(files)
    done()
  }

  // order is important here
  Metalsmith( __dirname + '/..' )
    .use(
      ignore([
        '**/.DS_Store',
        'files/**/*',
        'images/**/*',
        'styles/**/*',
        'posts/en/**/*',
        'posts/fr/drafts/**/*',
        'templates/**/*',
        'CNAME',
        'index.md'
      ])
    )
    .use( metallic() )
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
          pattern: 'src/posts/fr/*.md',
          sortBy: 'date',
          reverse: true,
        }
      })
    )
    .use(
      permalinks({
        pattern: ':title'
      })
    )
    // .use( fixIndex )
    // .use( debug )
    .use(
      templates({
        engine: 'jade',
        directory: 'src/templates',
        moment: moment,
        lang: 'fr'
      })
    )
    .clean( false )
    .destination('./dist/fr/')
    .build(function(err) {
      if (err) throw err
      cb()
    })
}

