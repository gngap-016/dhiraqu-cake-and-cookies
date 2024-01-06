import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Hero from '@/components/hero/Hero'

export const metadata = {
  title: 'Kontak | DhiraQu Cake & Cookies',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <h1 className={styles.title}>Hubungi Kami</h1>
      <div className={styles.contacts}>
        <table className={styles.table}>
          <tr className={styles.list}>
            <th style={{width: '40%', paddingBottom: 12}}>Instagram</th>
            <th style={{width: 20, paddingBottom: 12}}>:</th>
            <td style={{paddingBottom: 12}}><Link href={'https://www.instagram.com/dhiraqu_cookies/'}>@DhiraQu_Cookies</Link></td>
          </tr>
          <tr className={styles.list}>
            <th>WhatsApp</th>
            <th>:</th>
            <td><Link href={'https://wa.me/6281272091978'}>+62 812 7209 1978</Link></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ContactPage