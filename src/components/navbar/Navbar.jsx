"use client"
import React, { useCallback, useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  
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
      <Link href={'/'} className={styles.link}>Beranda</Link>
      <Link href={'/menu'} className={styles.link}>Menu</Link>
      <Link href={'/kontak'} className={styles.link}>Kontak</Link>
    </div>
  )
}

export default Navbar