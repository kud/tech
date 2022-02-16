import dayjs from "dayjs"
import { paramCase } from "param-case"
const { NotionToMarkdown } = require("notion-to-md")

import notion from "lib/notion"

const getPost = async (pageId) => {
  const page = await notion.pages.retrieve({ page_id: pageId })

  const meta = {
    slug: `${paramCase(
      page.properties["Name"][page.properties["Name"].type][0]?.plain_text,
    )}--${page.id}`,
    title: page.properties["Name"][page.properties["Name"].type][0]?.plain_text,
    description:
      page.properties["Description"][page.properties["Description"].type][0]
        ?.plain_text || null,
    date: dayjs(
      page.properties["Date"][page.properties["Date"].type].start,
    ).format("DD MMMM YYYY"),
    cover: page?.cover?.[page.cover.type].url || null,
    redirect:
      page.properties["Redirect"][page.properties["Redirect"].type]?.url ||
      null,
  }

  // @NOTE: useful if we use the notion API directly
  // const children = await notion.blocks.children.list({
  //   block_id: pageId,
  //   page_size: 100,
  // })
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)

  return { meta, mdContent: mdString }
}

export default getPost
