import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = ({title, price, img}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={img} alt='' className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.price}>Rp {price},-</span>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default Card