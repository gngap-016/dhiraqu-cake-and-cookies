import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Kontak | DhiraQu Cake & Cookies',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hubungi Kami</h1>
      <div className={styles.contacts}>
      </div>
    </div>
  )
}

export default ContactPage