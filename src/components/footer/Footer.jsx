import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        &copy; Copyright 2023 DhiraQu Cake & Cookies by Ganuta
      </p>
      <div className={styles.socials}>
        <Link href={'https://www.instagram.com/dhiraqu_cookies/'} className={styles.link} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className={`${styles.icon} ${styles.instagram}`} />
        </Link>
        <Link href={'https://wa.me/6281272091978'} className={styles.link}  target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faWhatsapp} className={`${styles.icon} ${styles.whatsapp}`} />
        </Link>
      </div>
    </div>
  )
}

export default Footer