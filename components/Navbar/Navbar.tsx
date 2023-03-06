import { NavRoutes } from '@/utils/NavRoutes'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from '../NavLink/NavLink'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={ styles.nav }>
      <div className={ styles.container }>
        <Link href='/' className={ styles.siteTitle_Container }>
          <picture>
            <source srcSet='/images/favicon.avif' type='image/avif'/>
            <source srcSet='/images/favicon.webp' type='image/webp'/>
            <source  srcSet='/images/favicon.png' type='image/png'/>
            <Image
              src="/images/favicon.png" 
              alt="Site Logo" 
              className={ styles.siteLogo }
              width={ 50 }
              height={ 50 }
              />
          </picture>
          <h2 className={ styles.siteTitle }>TCF Wiki Bot</h2>
        </Link>
        <ul className={ styles.list }>
          { NavRoutes.map(route => (
            <li key={ route.id } className={ route.name.replaceAll(/\s/g, '') }>
              <NavLink href={ route.href }>{ route.name }</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar