import React from 'react'
import styles from './menuList.module.css'
import Link from 'next/link'
import Card from '../card/Card'
import { menus } from '@/utils/menu'

const MenuList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <Link href={'/menu?categories=all'} className={styles.categoryLink}>Semua</Link>
        <Link href={'/menu?categories=cake'} className={styles.categoryLink}>Cake</Link>
        <Link href={'/menu?categories=roti'} className={styles.categoryLink}>Roti</Link>
        <Link href={'/menu?categories=bolen'} className={styles.categoryLink}>Bolen</Link>
        <Link href={'/menu?categories=risol-mayo'} className={styles.categoryLink}>Risol Mayo</Link>
        <Link href={'/menu?categories=brownies'} className={styles.categoryLink}>Brownies</Link>
        <Link href={'/menu?categories=dimsum'} className={styles.categoryLink}>Dimsum</Link>
        <Link href={'/menu?categories=donat'} className={styles.categoryLink}>Donat</Link>
      </div>
      <div className={styles.menuList}>
        {menus?.slice(0,6).map(menu => (
          <Card key={menu.id} title={menu.title} price={menu.price} img={menu.img} />
        ))}
      </div>
    </div>
  )
}

export default MenuList