import { Metadata } from 'next'
import { ContentfulCollection } from 'contentful'
import { getPosts } from '@/utils/getPosts'
import { TypeTcfbot } from '@/contentful/types'
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
  return <CommandContainer title='Discord Commands' />
}
