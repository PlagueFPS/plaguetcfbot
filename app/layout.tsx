export const revalidate = 60
import './globals.css'
import styles from './RootLayout.module.css'
import { Metadata } from 'next';
import { Rajdhani } from "next/font/google";
import { use } from 'react';
import { getPosts } from '@/utils/getPosts';
import { TypeBotInfo } from '@/contentful/types';
import { ContentfulCollection } from 'contentful';
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header';
import ContentContainer from '@/components/ContentContainer/ContentContainer';
interface RootLayoutProps {
  children: React.ReactNode
}

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  creator: 'Plague',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png'
  },
  openGraph: {
    url: 'https://main--plaguetcfbot.netlify.app',
    siteName: 'PlagueTCFBot',
    type: 'website',
    images: [
      {
        url: '/images/favicon.png',
        width: 300,
        height: 300,
      }
    ]
  },
  twitter: {
    card: 'summary',
    images: ['/images/favicon.png']
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  const content: ContentfulCollection<TypeBotInfo> = use(getPosts({ content_type: 'botInfo', "sys.id": 'niv5RmWdFLXUsAF5mrIhZ' }))
  const contentPost = content.items[0]
  const title = 'The Cycle: Frontier Wiki Bot'
  
  return (
    <html lang="en" style={{backgroundColor: "hsl(225, 8%, 9%)"}}>
      <head />
      <body>
        <div id="top"></div>
        <div className={ `${styles.wrapper} ${rajdhani.className} `}>
          <Navbar />
          <main className={ styles.main }>
            <Header bannerImage='S3_Background' opacity={ 0.5 } title={ title } />
            <div className={ styles.container }>
              <ContentContainer post={ contentPost } />
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
