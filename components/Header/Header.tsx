import styles from './Header.module.css'
import * as Contentful from 'contentful'
import BannerImage from '../BannerImage/BannerImage'

interface HeaderProps {
  bannerImage: Contentful.Asset
  title: string
  opacity?: number
}

const Header = ({ bannerImage, title, opacity }: HeaderProps) => {
  return (
    <header className={ styles.header }>
      <BannerImage bannerImage={ bannerImage } opacity={ opacity ?? undefined } />
      <div className={ styles.titleContainer }>
        <h1 className={ styles.title }>{ title }</h1>
      </div>
    </header>
  )
}

export default Header