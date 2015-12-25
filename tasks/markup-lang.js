var gutil = require('gulp-util')

module.exports = function( cb, lang ) {

  var antiLang = lang === 'fr' ? 'en' : 'fr'

  var debug = function( files, metalsmith, done ) {
    console.log(files)
    done()
  }

  // order is important here
  require('metalsmith')( __dirname + '/..' )
    .use(
      require('metalsmith-ignore')([
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
    .use( require("metalsmith-drafts")() )
    .use( require('metalsmith-metallic')() )
    .use(
      require('metalsmith-markdown')({
        smartypants: true,
        gfm: true,
        tables: true
      })
    )
    .use(
      require('metalsmith-collections')({
        posts: {
          pattern: 'src/posts/' + lang + '/*.md',
          sortBy: 'date',
          reverse: true,
        }
      })
    )
    .use(
      require('metalsmith-permalinks')({
        pattern: ':title'
      })
    )
    // .use( debug )
    .use(
      require('metalsmith-layouts')({
        engine: 'jade',
        directory: 'src/templates',
        moment: require('moment'),
        lang: lang,
        antiLang: antiLang,
        trans: require('./../locales/' + lang + '.json'),
        NODE_ENV: gutil.env.dist ? 'production' : 'development'
      })
    )
    .use(
      require("metalsmith-headings-identifier")({
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

