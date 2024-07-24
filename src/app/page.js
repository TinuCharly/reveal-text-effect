"use client";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";
import { useState } from "react";

export default function Home() {
  const [isHovered, setHovered] = useState(false);

  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40 ;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          No I'm a graphic designer
        </p>
      </motion.div>

      <div className={styles.body}> Hi I'm a web developer</div>
    </main>
  );
}
