"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
     
      className="min-h-screen px-10 pt-40"
      style={{ background: "var(--color-bg)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-sm mb-6"
      >
        The Studio →
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[22vw] font-extrabold lowercase leading-none tracking-tight"
      >
        champ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8 }}
        className="max-w-3xl text-xl mt-8"
      >
        We bring ideas to life through sleek, innovative animation,
        crafting experiences that go beyond visuals to captivate
        and engage.
      </motion.p>
    </section>
  );
}
