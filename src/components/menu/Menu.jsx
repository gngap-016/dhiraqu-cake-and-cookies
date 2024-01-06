import React from 'react'
import styles from './menu.module.css'
import MenuList from '../menuList/MenuList'

const Menu = ({ cat, limit }) => {
  return (
    <div id='menu' className={styles.container}>
      <h1 className={styles.title}>Menu</h1>
      <MenuList cat={cat} limit={limit} />
    </div>
  )
}

export default Menu