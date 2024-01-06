import React from 'react'
import styles from './menuList.module.css'
import Link from 'next/link'
import Card from '../card/Card'

const getData = async (cat) => {
  const res = await fetch(`${process.env.HOME_URL}api/menu?categories=${cat}`, {
    cache: 'no-store',
  });

  if(!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const MenuList = async ({ cat, limit }) => {
  const {category, menus} = await getData(cat);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{category === "all" ? "Semua" : category}</h2>
      <div className={styles.categories}>
        <Link href={'/menu?categories=all'} className={styles.categoryLink}>Semua</Link>
        <Link href={'/menu?categories=cake'} className={styles.categoryLink}>Cake</Link>
        <Link href={'/menu?categories=macaroni'} className={styles.categoryLink}>Macaroni</Link>
        <Link href={'/menu?categories=bolen'} className={styles.categoryLink}>Bolen</Link>
        <Link href={'/menu?categories=risol-mayo'} className={styles.categoryLink}>Risol Mayo</Link>
        <Link href={'/menu?categories=brownies'} className={styles.categoryLink}>Brownies</Link>
        <Link href={'/menu?categories=nastar'} className={styles.categoryLink}>Nastar</Link>
        <Link href={'/menu?categories=kacang'} className={styles.categoryLink}>Kacang</Link>
        <Link href={'/menu?categories=dimsum'} className={styles.categoryLink}>Dimsum</Link>
      </div>
      <div className={styles.menuList}>
        {
        menus?.slice(0, limit).map(menu => (
          <Card key={menu.id} title={menu.title} price={menu.price} img={menu.img} />
          ))
        }
        </div>
    </div>
  )
}

export default MenuList