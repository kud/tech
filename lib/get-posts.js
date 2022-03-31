import dayjs from "dayjs"
import { paramCase } from "param-case"

import notion from "lib/notion"

const getPosts = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) throw new Error("NOTION_DATABASE_ID envVar empty")

  const database = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  })

  const rawPages = database.results

  const pagePromises = rawPages.map(async ({ id }) => {
    const page = await notion.pages.retrieve({ page_id: id })

    return {
      slug: `${paramCase(
        page.properties["Name"][page.properties["Name"].type][0]?.plain_text,
      )}--${page.id}`,
      title:
        page.properties["Name"][page.properties["Name"].type][0]?.plain_text,
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
  })

  const posts = await Promise.all(pagePromises)

  return posts
}

export default getPosts
