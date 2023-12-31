import React from "react"
import styles from './page.module.css';
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Menu from "@/components/menu/Menu";
import Testimoni from "@/components/testimoni/Testimoni";
import Footer from "@/components/footer/Footer";

export default function Home({ searchParams }) {
  const { categories } = searchParams;

  console.log(categories)
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Menu cat={"all"} limit={6} />
      <Testimoni />
    </div>
  )
}
