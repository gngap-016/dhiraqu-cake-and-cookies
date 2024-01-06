import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tentang Kami</h1>
      <div className={styles.descContainer}>
        <p className={styles.w50}>{`"Dhiraqu Cake & Cookies" didirikan pada tahun 2019 oleh Endang Sapriyani yang  merupakan usaha yang berbidang di industri pastry, DhiraQu Cake & Cookies menjual berbagai cake serta cookies dengan bahan-bahan terbaik, rasa, dan banyak varian produk yang menggugah selera.  Motivasi pendirian perusahaan ini berasal dari kecintaan pada seni kuliner dan keinginan untuk berkontribusi dalam memenuhi kebutuhan pasar yang terus berkembang. `}</p>
        <p className={styles.w50}>{`Dhiraqu Cake & Cookies mendedikasikan diri untuk memberikan pengalaman kuliner yang tak terlupakan kepada pelanggan mereka. Mereka percaya bahwa kualitas bahan baku yang baik, inovasi dalam desain, dan ketelitian dalam pembuatan adalah kunci kesuksesan. Selain itu, perusahaan ini berkomitmen untuk memberikan layanan pelanggan yang prima dan memastikan kepuasan pelanggan setiap kali mereka menikmati produk Dhiraqu.`}</p>
        <div className={`${styles.w100} ${styles.tCenter}`}>
          <p className={styles.dialogue}>{`"Worry mau ngemil karena takut gemuk? Tenang. DhiraQu Cake & Cookies sudah terbukti rendah kalori, enak, dan ramah dikantong. Kamu gak perlu takut akan kalori di Kue dhiraqu cake & cookies. Cantik buatan kami. ASLI TANPA PENGAWET dan PEMANIS BUATAN. Dibuat dengan sepenuh hati untuk kamu."`}</p>
          <p className={styles.tagLine}>{`Ayo tunggu apalagi, segera tentukan varian kue di DhiraQu Cake & Cookies!!`}</p>
        </div>
      </div>
    </div>
  )
}

export default About