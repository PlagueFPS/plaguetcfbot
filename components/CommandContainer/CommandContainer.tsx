import styles from './CommandContainer.module.css'
import { use } from 'react'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeCommands, TypeDiscordCommands } from '@/contentful/types'
import CommandCard from '../CommandCard/CommandCard'
import ButtonContainer from '../ButtonContainer/ButtonContainer'

interface CommandContainerProps {
  title: string
}

const CommandContainer = ({ title }: CommandContainerProps) => {
  const condition = title === 'Twitch Commands'
  const posts: ContentfulCollection<TypeCommands | TypeDiscordCommands> = condition 
    ? use(getPosts({ content_type: 'commands' })) : use(getPosts({ content_type: 'discordCommands' }))
  const commands = posts.items
  const sortedCommands = commands.sort((a, b) => {
    const x = new Date(a.sys.createdAt).getTime()
    const y = new Date(b.sys.createdAt).getTime()
    return y - x
  })

  return (
    <div className={ styles.container }>
      <h2 className={ styles.title } id='commands'>{ title }</h2>
      <ButtonContainer 
        link={ condition ? '/' : '/twitch' } 
        text={ condition ? 'See Discord Commands' : 'See Twitch Commands' } 
      />
      { sortedCommands.map(command => (
        <CommandCard key={ command.sys.id } command={ command } />
      ))}
    </div>
  )
}

export default CommandContainer