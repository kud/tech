import fg from "fast-glob"
import dayjs from "dayjs"
import "dayjs/locale/fr"

const getPosts = (lang) => {
  // using here sync to have the right order of files
  const filepathList = fg.sync(`src/pages/${lang}/posts/**/*.mdx`, {
    onlyFiles: true,
  })

  // @NOTE: this is cool but you'll get conflict if a post is the same day
  const posts = filepathList.reverse().map((filepath) => {
    const { meta } = require(`../../${filepath}`)

    return {
      url: filepath.replace("src/pages", "").replace("/index.mdx", ""),
      title: meta?.title || null,
      description: meta?.description || null,
      date: dayjs(filepath.match(/\d{4}\/\d{2}\/\d{2}/g)[0])
        .locale(lang)
        .format("DD MMMM YYYY"),
      cover: meta?.cover || null,
      redirect: meta?.redirect || null,
    }
  })

  return posts
}

export default getPosts
