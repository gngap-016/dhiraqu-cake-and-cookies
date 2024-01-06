"use client"
import React, { useCallback, useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  
  const onScroll = useCallback(() => {
    const navbar = document.getElementById('navbar');
    const { scrollY } = window;

    scrollY > 20 ? navbar.classList.add(`${styles.sticky}`) : navbar.classList.remove(`${styles.sticky}`)
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, [onScroll]);


  return (
    <div id='navbar' className={styles.container}>
      <Link href={'/'} className={`${styles.link} ${pathname === '/' && styles.active}`}>Beranda</Link>
      <Link href={'/menu'} className={`${styles.link} ${pathname === '/menu' && styles.active}`}>Menu</Link>
      <Link href={'/kontak'} className={`${styles.link} ${pathname === '/kontak' && styles.active}`}>Kontak</Link>
    </div>
  )
}

export default Navbar