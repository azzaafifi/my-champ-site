"use client";

import Image from "next/image";

import styles from "./about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function About() {

  return (
   
    <main className={styles.container}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Please <br /> Call Me aleven 
          
          <span className={styles.dash}> — Motion Designer —</span>
        </h1>

        <div className={styles.imageWrapper}>
          <Image
            src="/me.jpg"
            alt="Your Name"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>
      </section>

      {/* About Text */}
      <section className={styles.aboutText}>
        (about)
        <p className="w-full max-w-none text-6xl font-bold mt-19 opacity-80">
          At Aleven , 
creativity moves with purpose.

I transform concepts into dynamic visual stories, blending innovation with refined design to create animations that inspire, engage, and leave a lasting impression. Every frame is crafted with intention-turning imagination into impactful digital experiences.
        </p>
        </section>


      <p className={styles.description}>
          Specializing in seamless looping animations, high-resolution GIFs,
          and platform-optimized video exports — I design motion that captures
          attention and tells stories visually.
        </p>
      

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <blockquote>
          “ Driven by a passion for bold visuals and creative motion, every
          piece I create goes beyond animation.”
        </blockquote>
        <span className={styles.quoteLine}></span>
      </section>

      {/* Bottom Statement */}
      <section className={styles.bottom}>
        <h2>
          it’s art <br /> — in motion.
        </h2>
        <p>I love pushing the limits of visual storytelling.</p>
      </section>

    </main>
  );
}