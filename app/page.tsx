export const revalidate = 60
import styles from './Home.module.css'
import { use } from 'react'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeTcfbot} from '@/contentful/types'
import Header from '@/components/Header/Header'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import CommandContainer from '@/components/CommandContainer/CommandContainer'

export default function Home() {
  const posts: ContentfulCollection<TypeTcfbot> = use(getPosts({ content_type: 'tcfbot', 'sys.id': '1uGMNHezuD0HgDZGEcVeh3'}))
  const { featuredImage } = posts.items[0].fields
  const title = 'The Cycle: Frontier Bot'

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
