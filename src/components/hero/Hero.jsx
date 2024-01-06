"use client"
import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import { carousel } from '@/utils/carousel'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.descContainer}>
        <div className={styles.imgContainer}>
          <Image src={'/dhiraqu.jpg'} alt='DhiraQu' className={styles.img} fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>DhiraQu</h1>
          <p className={styles.subtitle}>Cake & Cookies</p>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <Swiper
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          className={styles.swiperCarousel}
        >
          {carousel?.map(item => (
            <SwiperSlide key={item.id} className={styles.swiperItem}>
              <Image src={item.img} alt='' className={styles.imgCarousel} fill />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero