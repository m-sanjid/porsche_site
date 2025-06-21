"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import PorscheSvg from "./PorscheSvg";
import Image from "next/image";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const yProgress = useTransform(scrollYProgress, [0.5, 0.8], [400, -16]);

  return (
    <motion.div
      className="fixed top-0 z-50 h-16 w-full border-b bg-white"
      style={{ opacity: opacityProgress }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center">
        <div className="absolute top-4 left-4 h-10 w-10">
          <Image src="/logo.svg" alt="Porsche Logo" width={100} height={100} />
        </div>
        <motion.div
          className="flex h-full w-full items-center justify-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            y: yProgress,
          }}
        >
          <PorscheSvg />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
