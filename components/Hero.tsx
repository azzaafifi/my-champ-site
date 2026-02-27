"use client";

import { motion, easeOut } from "framer-motion";

    const BoyLogo = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* الرأس */}
    <circle cx="50" cy="40" r="22" fill="#000" />

    {/* الشعر */}
    <path
      d="M28 40 Q50 10 72 40"
      stroke="#000"
      strokeWidth="2"
      fill="#000"
    />

    {/* النظارة */}
    <circle cx="40" cy="40" r="6" stroke="#fff" strokeWidth="2" fill="none" />
    <circle cx="60" cy="40" r="6" stroke="#fff" strokeWidth="2" fill="none" />
    <line x1="46" y1="40" x2="54" y2="40" stroke="#fff" strokeWidth="2" />

    {/* الابتسامة */}
    <path d="M40 50 Q50 58 60 50" stroke="#fff" strokeWidth="2" fill="none" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen px-10 pt-0"
      style={{ background: "var(--color-bg)" }}
    >
     <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative text-[30vw] font-extrabold lowercase leading-none tracking-tight"
>
  Alevev

  {/* اللوجو المتحرك */}
  <motion.div
    className="absolute left-[12%] bottom-[6%] w-[6vw]"
    initial={{ y: 40, opacity: 0 }}
    animate={{
      y: [40, 0, 0, 40],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <BoyLogo />
  </motion.div>
</motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl opacity-70 mb-10 mt-6"
      >
        the studio →
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="w-full max-w-none text-6xl font-bold mt-19 opacity-80"
        >
         Custom animated illustrations tailored to your idea or brand.
                 <br />

Creative collages with dynamic motion.
        <br />

Typography animations that bring words to life.
        <br />

Seamless looping animations ideal for social media, ads, websites, or presentations.
        <br />

High-resolution GIFs and video exports optimized for all platforms.
        <br />

Whether you want something playful, artistic, or sleek and professional, I can design GIF animations that stand out, engage, and tell your story in motion.
        <br />


        </motion.p>
      </motion.div>
    </section>
  );
}
