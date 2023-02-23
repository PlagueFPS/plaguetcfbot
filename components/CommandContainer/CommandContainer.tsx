import styles from './CommandContainer.module.css'
import { use } from 'react'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeCommands } from '@/contentful/types'
import CommandCard from '../CommandCard/CommandCard'

const CommandContainer = () => {
  const posts: ContentfulCollection<TypeCommands> = use(getPosts({ content_type: 'commands' }))
  const commands = posts.items
  const sortedCommands = commands.sort((a, b) => {
    let x = new Date(a.sys.createdAt).getTime()
    let y = new Date(b.sys.createdAt).getTime()
    return x - y
  })

  return (
    <div className={ styles.container }>
      <h2 className={ styles.title } id='commands'>Commands</h2>
      { sortedCommands.map(command => (
        <CommandCard key={ command.sys.id } command={ command } />
      ))}
    </div>
  )
}

export default CommandContainer