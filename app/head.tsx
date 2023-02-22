import { use } from "react"
import { getPosts } from "@/utils/getPosts"
import { TypeTcfbot } from "@/contentful/types"

export default function Head() {
  const posts: any = use(getPosts({ content_type: 'tcfbot', 'sys.id': '1uGMNHezuD0HgDZGEcVeh3' }))
  const post: TypeTcfbot = posts.items[0]
  const { title, description } = post.fields

  return (
    <>
      <title>{ title }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={ description } />
      <link rel="icon" href="/images/favicon.png" />
    </>
  )
}
