import React from 'react'
import styles from './page.module.css'
import Menu from '@/components/menu/Menu'
import Hero from '@/components/hero/Hero'

export const metadata = {
  title: 'Menu | DhiraQu Cake & Cookies',
}

const MenuPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Menu />
    </div>
  )
}

export default MenuPage