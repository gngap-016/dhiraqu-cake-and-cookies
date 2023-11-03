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
            <h1 className={styles.username}>Gilang Aji Panutan</h1>
            <p className={styles.userTestimony}>{`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum, officiis laudantium odit tenetur enim accusamus rerum inventore. Ea animi nisi nam dicta."`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Gilang Aji Panutan</h1>
            <p className={styles.userTestimony}>{`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum, officiis laudantium odit tenetur enim accusamus rerum inventore. Ea animi nisi nam dicta."`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Gilang Aji Panutan</h1>
            <p className={styles.userTestimony}>{`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum, officiis laudantium odit tenetur enim accusamus rerum inventore. Ea animi nisi nam dicta."`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Gilang Aji Panutan</h1>
            <p className={styles.userTestimony}>{`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum, officiis laudantium odit tenetur enim accusamus rerum inventore. Ea animi nisi nam dicta."`}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimony}>
          <div className={styles.imgContainer}>
            <Image src={'/carousel/1.jpg'} alt='' className={styles.img} fill />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.username}>Gilang Aji Panutan</h1>
            <p className={styles.userTestimony}>{`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste ipsum, officiis laudantium odit tenetur enim accusamus rerum inventore. Ea animi nisi nam dicta."`}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimoni