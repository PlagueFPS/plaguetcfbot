import styles from './ContentContainer.module.css'
import { TypeBotInfo } from '@/contentful/types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"
import { renderOptions } from '@/contentful/renderOptions'

interface ContentContainerProps {
  post: TypeBotInfo
}

const ContentContainer = ({ post }: ContentContainerProps) => {
  const { title, body } = post.fields

  return (
    <div className={ styles.container }>
      <h2 className={ styles.title }>{ title }</h2>
      { documentToReactComponents(body as Document, renderOptions) }
    </div>
  )
}

export default ContentContainer