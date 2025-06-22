"use client";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import EngineSound from "./EngineSound";
import {
  PHeading,
  PModelSignature,
  PText,
} from "@porsche-design-system/components-react";

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // when it enters & exits viewport
  });

  // Move horizontally based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <section
      ref={sectionRef}
      className="relative z-50 h-[200vh] bg-white/5 backdrop-blur-md"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="h-[100vh] min-w-[100vw]">
            <PorscheImage />
          </div>
          <div className="relative h-[100vh] min-w-[100vw]">
            <PorscheVideo />
          </div>
          <div className="relative flex h-[100vh] min-w-[100vw] items-center justify-center">
            <EngineSound />
            <BannerText scrollYProgress={scrollYProgress} />
          </div>

          <div className="relative flex h-[100vh] min-w-[100vw] items-center justify-center">
            <End />
            <EndText />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;

const PorscheVideo = () => {
  const [muted, setMuted] = useState(true);

  const handleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="relative h-[100vh] w-[100vw]">
      <video
        autoPlay
        playsInline
        muted={muted}
        loop
        className="h-full w-full object-cover"
        src="/porsche.mp4"
      ></video>
      <button
        onClick={handleMute}
        className="absolute top-20 right-20 rounded-2xl bg-black/50 p-4 text-white"
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

const PorscheImage = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Image
        src="/chassis.avif"
        alt="Porsche"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

const BannerText = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.1, 0.3], [-4000, -2200, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <motion.div
      style={{ opacity: textOpacity, x: textX, scale: textScale }}
      className="absolute top-2"
    >
      <PModelSignature className="block [--p-model-signature-height:360px] [--p-model-signature-width:auto]">
        911
      </PModelSignature>
    </motion.div>
  );
};

const End = () => {
  return (
    <div className="relative h-screen w-screen bg-black text-white">
      <div className="relative h-[100vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/steering.avif"
            alt="End"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/50" />
        </div>
      </div>
    </div>
  );
};

const EndText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 400, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
      style={{ zIndex: 100 }}
      className="absolute top-1/2 left-64 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 md:left-100"
    >
      <PHeading size="x-large">The</PHeading>
      <PModelSignature className="block [--p-model-signature-height:160px] [--p-model-signature-width:auto]">
        911
      </PModelSignature>
      <PHeading size="x-large" align="end">
        GT3 RS
      </PHeading>
      <PText color="primary">
        The Porsche 911 GT3 RS is a high-performance, track-focused variant of
        the iconic 911 series. Powered by a naturally aspirated 4.0-liter
        flat-six engine, it delivers exhilarating performance with a redline
        near 9,000 rpm and over 500 horsepower.
      </PText>
    </motion.div>
  );
};
