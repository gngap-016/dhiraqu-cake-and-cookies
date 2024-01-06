import React from 'react'
import styles from './page.module.css'
import Menu from '@/components/menu/Menu'
import Hero from '@/components/hero/Hero'

export const metadata = {
  title: 'Menu | DhiraQu Cake & Cookies',
}

const MenuPage = ({ searchParams }) => {
  const { categories } = searchParams;

  return (
    <div className={styles.container}>
      <Menu cat={!categories ? "all" : categories} />
    </div>
  )
}

export default MenuPage