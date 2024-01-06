"use client"
import React from 'react'
import styles from './testimoni.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const Testimoni = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Testimoni Pelanggan</h1>
      <Swiper
        effect={'cards'}
        grabCursor
        modules={[EffectCards]}
        className={styles.testimonies}
      >
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Andika W</h1>
            <p className={styles.userTestimony}>{`"Saya sangat puas dengan produk yang ditawarkan oleh DhiraQu!"`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Bima R</h1>
            <p className={styles.userTestimony}>{`"Banyak varian produk dan semuanya sangat memuaskan!"`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Gilang Ap</h1>
            <p className={styles.userTestimony}>{`"Produk yang ditawarkan sangat beragam sehingga pelanggan tidak merasa bosan"`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>M Dani</h1>
            <p className={styles.userTestimony}>{`"Saya tidak pernah bosan untuk membeli produk disini"`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>M Luqman</h1>
            <p className={styles.userTestimony}>{`"Produk yang ditawarkan benar-benar sesuai dengan harganya"`}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimoni