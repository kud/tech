const path = require("path")
const dayjs = require("dayjs")
const slugify = require("slugify")

const currentDate = dayjs().format("YYYY/MM/DD")

const SRC_DIR = path.resolve(__dirname, "src")
const PLOP_DIR = path.resolve(__dirname, "__plop__")

module.exports = (plop) => {
  plop.setHelper("slugify", (txt) =>
    slugify(txt, { lower: true, strict: true }),
  )

  plop.setHelper("currentDate", () => currentDate)
  plop.setHelper("srcDir", () => SRC_DIR)

  plop.setGenerator("page", {
    description: "Creation of a page.",

    prompts: [
      {
        type: "input",
        name: "lang",
        message: "language (fr, en):",
      },
      {
        type: "input",
        name: "title",
        message: "title:",
      },
      {
        type: "input",
        name: "description",
        message: "description:",
      },
      {
        type: "input",
        name: "cover",
        message: "cover:",
      },
    ],

    actions: [
      {
        type: "add",
        templateFile: `${PLOP_DIR}/page.hbs`,
        path: `{{ srcDir }}/pages/{{ lang }}/posts/{{ currentDate }}/{{ slugify title }}/index.mdx`,
        skipIfExists: true,
      },
    ],
  })
}
