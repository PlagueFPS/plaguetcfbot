export const revalidate = 60
import styles from './Home.module.css'
import { use } from 'react'
import { Metadata } from 'next'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeTcfbot} from '@/contentful/types'
import Header from '@/components/Header/Header'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import CommandContainer from '@/components/CommandContainer/CommandContainer'

export const generateMetadata = async () => {
  const posts: ContentfulCollection<TypeTcfbot> = await getPosts({ content_type: 'tcfbot', 'sys.id': '1uGMNHezuD0HgDZGEcVeh3'})
  const { title, description } = posts.items[0].fields
  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description
    },
    twitter: {
      title: title,
      description: description
    }
  }
  return metadata
}

export default function Home() {
  const posts: ContentfulCollection<TypeTcfbot> = use(getPosts({ content_type: 'tcfbot', 'sys.id': '1uGMNHezuD0HgDZGEcVeh3'}))
  const { featuredImage } = posts.items[0].fields
  const title = 'The Cycle: Frontier Wiki Bot'

  return (
    <>
      <Header bannerImage={ featuredImage } opacity={ 0.5 } title={ title } />
      <div className={ styles.container }>
        <ContentContainer />
        <CommandContainer />
      </div>
    </>
  )
}
