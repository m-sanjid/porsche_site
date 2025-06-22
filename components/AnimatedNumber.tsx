"use client";

import { motion } from "motion/react";
import React from "react";

interface AnimatedNumberProps {
  number: number | string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number }) => {
  const digits = number.toString().split("");

  return (
    <div className="flex items-end">
      {digits.map((char, idx) =>
        /\d/.test(char) ? (
          <AnimatedDigit
            key={idx}
            target={parseInt(char)}
            delay={idx * 80}
            width="4ch"
          />
        ) : (
          <span
            key={idx}
            className="text-[4rem] font-light tabular-nums"
            style={{ lineHeight: "4rem" }}
          >
            {char}
          </span>
        ),
      )}
    </div>
  );
};

interface AnimatedDigitProps {
  target: number;
  delay?: number;
  width?: string; // default '1ch'
}

export const AnimatedDigit: React.FC<AnimatedDigitProps> = ({
  target,
  delay = 0,
  width = "1ch",
}) => {
  const digits = Array.from({ length: target + 1 }, (_, i) => i);

  return (
    <div
      className="inline-block overflow-hidden text-center tabular-nums"
      style={{
        height: "4rem",
        width,
        lineHeight: "4rem",
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: `-${target * 4}rem` }}
        transition={{
          delay: delay / 1000,
          duration: 0.6 + target * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {digits.map((digit) => (
          <div
            key={digit}
            className="text-[4rem] font-light"
            style={{ height: "4rem" }}
          >
            {digit}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
