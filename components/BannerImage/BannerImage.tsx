import styles from './BannerImage.module.css'
import * as Contentful from 'contentful'

interface BannerImageProps {
  bannerImage: Contentful.Asset
  opacity?: number
}

const BannerImage = ({ bannerImage, opacity }: BannerImageProps) => {
  const bannerImageURL = `https:${bannerImage.fields.file.url}`
  const imageSml = `${bannerImageURL}?w=480&h=270&q=50&fm=`
  const imageMed = `${bannerImageURL}?w=854&h=480&q=50&fm=`
  const imageLrg = `${bannerImageURL}?w=1280&h=720&q=50&fm=`
  const imageExLrg = `${bannerImageURL}?w=1920&h=1080&q=50&fm=`

  return (
    <figure className={ styles.container }>
      <picture>
        <source 
          srcSet={`
            ${imageSml}avif 480w, 
            ${imageMed}avif 854w, 
            ${imageLrg}avif 1280w, 
            ${imageExLrg}avif 1920w
          `} 
          sizes={`
            (max-width: 600px) 480w, 
            (max-width: 1000px) 854w, 
            (max-width: 1400px) 1280w, 
            1920w
          `}
          type="image/avif" 
        />
        <source 
          srcSet={`
            ${imageSml}webp 480w, 
            ${imageMed}webp 854w, 
            ${imageLrg}webp 1280w, 
            ${imageExLrg}webp 1920w
          `} 
          sizes={`
            (max-width: 600px) 480w, 
            (max-width: 1000px) 854w, 
            (max-width: 1400px) 1280w, 
            1920w
          `}
          type="image/webp" 
        />
        <source 
          srcSet={`
            ${imageSml}jpg 480w, 
            ${imageMed}jpg 854w, 
            ${imageLrg}jpg 1280w, 
            ${imageExLrg}jpg 1920w
          `} 
          sizes={`
            (max-width: 600px) 480w, 
            (max-width: 1000px) 854w, 
            (max-width: 1400px) 1280w, 
            1920w
          `}
          type="image/jpg" 
        />
        <img 
          src={ `${imageSml}jpg` }
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