var Metalsmith         = require('metalsmith')
var permalinks         = require('metalsmith-permalinks')
var markdown           = require('metalsmith-markdown')
var layouts            = require('metalsmith-layouts')
var ignore             = require('metalsmith-ignore')
var collections        = require('metalsmith-collections')
var metallic           = require('metalsmith-metallic')
var headingsidentifier = require("metalsmith-headings-identifier")
var drafts             = require("metalsmith-drafts")
var moment             = require('moment')

module.exports = function( cb, lang ) {

  var antiLang = lang === 'fr' ? 'en' : 'fr'

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
        'posts/' + antiLang + '/**/*',
        'templates/**/*',
        'CNAME',
        'index.md'
      ])
    )
    .use( drafts() )
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
          pattern: 'src/posts/' + lang + '/*.md',
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
    // .use( debug )
    .use(
      layouts({
        engine: 'jade',
        directory: 'src/templates',
        moment: moment,
        lang: lang,
        antiLang: antiLang,
        trans: require('./../locales/' + lang + '.json')
      })
    )
    .use(
      headingsidentifier({
        linkTemplate: '<a class="kud-Anchor" href="#%s"><span></span></a>'
      })
    )
    .clean( false )
    .destination('./dist/' + lang +'/')
    .build(function(err) {
      if (err) throw err
      cb()
    })
}

