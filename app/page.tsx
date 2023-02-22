import styles from './Home.module.css'
import { use } from 'react'
import { getPosts } from '@/utils/getPosts'
import { TypeTcfbot } from '@/contentful/types'
import Header from '@/components/Header/Header'

export default function Home() {
  const posts: any = use(getPosts({ content_type: 'tcfbot', 'sys.id': '1uGMNHezuD0HgDZGEcVeh3'}))
  const post: TypeTcfbot = posts.items[0]
  const { featuredImage } = post.fields
  const title = 'The Cycle: Frontier Bot'

  return (
    <>
      <Header bannerImage={ featuredImage } opacity={ 0.5 } title={ title } />
      <div className={ styles.container }>
        
      </div>
    </>
  )
}
