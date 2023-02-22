import styles from './ContentContainer.module.css'
import { use } from 'react'
import { getPosts } from '@/utils/getPosts'
import { TypeBotInfo } from '@/contentful/types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"

const ContentContainer = () => {
  const posts: any = use(getPosts({ content_type: 'botInfo', 'sys.id': 'niv5RmWdFLXUsAF5mrIhZ'}))
  const post: TypeBotInfo = posts.items[0]
  const { title, body } = post.fields

  return (
    <div className={ styles.container }>
      <h2 className={ styles.title }>{ title }</h2>
      { documentToReactComponents(body as Document, {}) }
    </div>
  )
}

export default ContentContainer