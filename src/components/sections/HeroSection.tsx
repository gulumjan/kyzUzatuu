"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { config as c } from "@/data/config";
import s from "./HeroSection.module.scss";

const item = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.8 + i * 0.25, duration: 1 },
});

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  return (
    <section ref={ref} className={s.hero}>
      <motion.div
        className={s.bg}
        style={{ y, backgroundImage: `url(${c.hero})` }}
      />
      <div className={s.shade} />
      <svg
        className={s.frame}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="none"
          stroke="#d9b872"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: "easeInOut" }}
        />
      </svg>
      <div className={s.inner}>
        <motion.h1 {...item(1)} className={s.title}>
          Кыз узатуу
        </motion.h1>
        <motion.div {...item(2)} className={s.name}>
          {c.bride}
        </motion.div>
        <motion.p {...item(3)} className={s.date}>
          {c.dateText}
        </motion.p>
        <motion.a {...item(4)} className={s.btn}>
          Төмөн жылдыруу
        </motion.a>
      </div>
    </section>
  );
}
