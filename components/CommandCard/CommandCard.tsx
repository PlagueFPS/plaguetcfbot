import styles from './CommandCard.module.css'
import { TypeCommands } from '@/contentful/types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

interface CommandCardProps {
  command: TypeCommands
}

const CommandCard = ({ command }: CommandCardProps) => {
  const { title, body } = command.fields
  return (
    <div className={ styles.container }>
      <h3 className={ styles.title }>{ title }</h3>
      { documentToReactComponents(body as Document, {}) }
    </div>
  )
}

export default CommandCard