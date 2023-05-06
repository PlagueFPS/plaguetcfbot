import styles from './BannerImage.module.css'

interface BannerImageProps {
  bannerImage: string
  opacity?: number
}

const BannerImage = ({ bannerImage, opacity }: BannerImageProps) => {

  return (
    <figure className={ styles.container }>
      <picture>
        <source srcSet={ `/images/${bannerImage}.avif` } type='image/avif' />
        <source srcSet={ `/images/${bannerImage}.webp` } type='image/webp' />
        <source srcSet={ `/images/${bannerImage}.png` } type='image/png' />
        <img 
          src={ `/images/${bannerImage}.png` }
          alt=""
          width={ 1920 }
          height={ 150 }
          style={{ opacity: opacity ?? 1 }}
          />
      </picture>
    </figure>
  )
}

export default BannerImage