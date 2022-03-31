const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

export default notion
