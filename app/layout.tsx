import './globals.css'
import styles from './RootLayout.module.css'
import { Rajdhani } from '@next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={{backgroundColor: "hsl(225, 8%, 9%)"}}>
      <head />
      <body>
        <div id="top"></div>
        <div className={ `${styles.wrapper} ${rajdhani.className} `}>
          <Navbar />
          <main className={ styles.main }>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
