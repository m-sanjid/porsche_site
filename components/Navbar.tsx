"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import PorscheSvg from "./PorscheSvg";
import { PCrest } from "@porsche-design-system/components-react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const yProgress = useTransform(scrollYProgress, [0.2, 0.4], [400, -16]);

  return (
    <motion.div
      className="fixed top-0 z-50 h-16 w-full border-b bg-white"
      style={{ opacity: opacityProgress }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center px-4">
        <motion.div
          className="absolute top-4 left-4 hidden h-10 w-10 md:block"
          style={{ scale: scaleProgress }}
        >
          <PCrest />
        </motion.div>
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
