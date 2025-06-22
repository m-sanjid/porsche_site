"use client";

import {
  PModelSignature,
  PText,
} from "@porsche-design-system/components-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative z-40 flex min-h-[120vh] flex-col items-center justify-center">
      <HeroText />
      <div className="sticky top-40 mx-auto h-[50%] w-full max-w-7xl">
        <Image
          src="/porsche-side.avif"
          alt="Porsche Hero"
          width={1000}
          height={1000}
          className="mx-auto object-cover"
        />
      </div>
      <GT3 />
    </div>
  );
};

export default Hero;

const HeroText = () => {
  const { scrollYProgress } = useScroll();
  const yProgress = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    [-160, 0, -160],
  );
  const opacityProgress = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.8],
    [0, 0.6, 0],
  );
  return (
    <motion.div
      className="sticky top-50 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      style={{ y: yProgress, opacity: opacityProgress }}
    >
      <PModelSignature className="block [--p-model-signature-height:200px] [--p-model-signature-width:auto]"></PModelSignature>
    </motion.div>
  );
};

const GT3 = () => {
  return (
    <div className="flex items-baseline">
      <PText className="text-[6rem]" size="inherit">
        911 GT3 RS
      </PText>
    </div>
  );
};
