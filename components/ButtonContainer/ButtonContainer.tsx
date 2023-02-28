"use client"
import Link from 'next/link'
import styles from './ButtonContainer.module.css'

interface ButtonContainerProps {
  text: string
  link: string
}

const ButtonContainer = ({ text, link }: ButtonContainerProps) => {
  return (
    <Link href={ link } className={ styles.container }>
      <button className={ styles.button }>{ text }</button>
    </Link>
  )
}

export default ButtonContainer