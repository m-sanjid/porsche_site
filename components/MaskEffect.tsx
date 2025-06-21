"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

const MaskEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const maskSize = useTransform(scrollYProgress, [0, 1], [18000, 400]);
  const maskPosition = useTransform(scrollYProgress, [0, 1], [-300, 400]);

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const outerImageOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const topImageOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const innerImageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-[200vh] bg-black">
      <motion.div
        style={{
          scale: scale,
          opacity: outerImageOpacity,
        }}
        className='fixed inset-0 z-10 h-full w-full bg-[url("/gt3rs.avif")] bg-cover bg-fixed'
      ></motion.div>
      <motion.div
        style={{
          maskSize: useMotionTemplate`${maskSize}px`,
          maskPosition: useMotionTemplate`center ${maskPosition}px`,
        }}
        className='fixed inset-0 z-20 m-auto h-full w-full bg-white [mask-image:url("/porsche.svg")] [mask-repeat:no-repeat]'
      >
        <motion.div
          style={{
            scale: scale,
            opacity: innerImageOpacity,
          }}
          className="fixed inset-0 h-full w-full bg-[url('/gt3rs.avif')] bg-cover bg-fixed"
        ></motion.div>
      </motion.div>
      <motion.div
        style={{
          opacity: topImageOpacity,
          scale: scale,
        }}
        className="fixed z-10 h-full w-full bg-[url('/porsche.avif')] bg-cover bg-fixed"
      ></motion.div>
    </div>
  );
};

export default MaskEffect;
