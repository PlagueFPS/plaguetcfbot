"use client"
import styles from './NavLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinksProps {
  href: string
  children: string | JSX.Element
  className?: string
  exact?: boolean
  ariaLabel?: string
}

const NavLink = ({ href, children, className, exact, ariaLabel }: NavLinksProps) => {
  const pathname = usePathname()
  const isActive =  exact ? pathname === href : pathname?.startsWith(href)

  return (
    <Link href={ href } className={ isActive ? `${className} ${styles.active}` : className } aria-label={ ariaLabel }>
      { children }
    </Link>
  )
}

export default NavLink