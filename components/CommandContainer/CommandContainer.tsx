import styles from './CommandContainer.module.css'
import { use } from 'react'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeDiscordCommands } from '@/contentful/types'
import CommandCard from '../CommandCard/CommandCard'

interface CommandContainerProps {
  title: string
}

const CommandContainer = ({ title }: CommandContainerProps) => {
  const posts: ContentfulCollection<TypeDiscordCommands> = use(getPosts({ content_type: 'discordCommands' }))
  const commands = posts.items
  const sortedCommands = commands.sort((a, b) => {
    const x = new Date(a.sys.createdAt).getTime()
    const y = new Date(b.sys.createdAt).getTime()
    return y - x
  })

  return (
    <div className={ styles.container }>
      <h2 className={ styles.title } id='commands'>{ title }</h2>
      { sortedCommands.map(command => (
        <CommandCard key={ command.sys.id } command={ command } />
      ))}
    </div>
  )
}

export default CommandContainer