import React from 'react'
import styles from './menu.module.css'
import MenuList from '../menuList/MenuList'

const Menu = () => {
  return (
    <div id='menu' className={styles.container}>
      <h1 className={styles.title}>Menu</h1>
      <MenuList />
    </div>
  )
}

export default Menu