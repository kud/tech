var Metalsmith         = require('metalsmith')
var permalinks         = require('metalsmith-permalinks')
var markdown           = require('metalsmith-markdown')
var templates          = require('metalsmith-templates')
var ignore             = require('metalsmith-ignore')
var collections        = require('metalsmith-collections')
var metallic           = require('metalsmith-metallic')
var headingsidentifier = require("metalsmith-headings-identifier")
var moment             = require('moment')

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
        'files/**/*',
        'images/**/*',
        'styles/**/*',
        'posts/en/drafts/**/*',
        'posts/fr/**/*',
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
          pattern: 'src/posts/en/*.md',
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
        moment: moment,
        lang: 'en'
      })
    )
    .use(
      headingsidentifier({
        linkTemplate: '<a class="kud-Anchor" href="#%s"><span></span></a>'
      })
    )
    .clean( false )
    .destination('./dist/en/')
    .build(function(err) {
      if (err) throw err
      cb()
    })


}

