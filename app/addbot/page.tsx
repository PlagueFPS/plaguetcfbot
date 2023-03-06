import styles from './AddBot.module.css'
import { Metadata } from 'next'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeBotInfo, TypeTcfbot } from '@/contentful/types'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import { use } from 'react'

export const generateMetadata = async () => {
  const posts: ContentfulCollection<TypeTcfbot> = await getPosts({ content_type: 'tcfbot', 'sys.id': '1uGMNHezuD0HgDZGEcVeh3'})
  const { title, description } = posts.items[0].fields
  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: 'https://main--plaguetcfbot.netlify.app/addbot'
    },
    twitter: {
      title: title,
      description: description
    }
  }
  return metadata
}

export default function Home() {
  const posts: ContentfulCollection<TypeBotInfo> = use(getPosts({ content_type: 'botInfo' }))
  const filteredPosts = posts.items.filter(post => post.sys.id !== 'niv5RmWdFLXUsAF5mrIhZ')
  const sortedPosts = filteredPosts.sort((a, b) => {
    const x = new Date(a.sys.createdAt).getTime()
    const y = new Date(b.sys.createdAt).getTime()
    return x - y
  })
  return (
    <div className={ styles.container }>
      { sortedPosts.map(post => (
        <ContentContainer post={ post } key={ post.sys.id } />
      ))}
    </div>
    
  )
}
