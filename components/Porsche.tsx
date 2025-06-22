"use client";

import React, { useRef } from "react";
import Hero from "./Hero";
import Details from "./Details";

const Porsche = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="relative z-40 flex h-[200vh] flex-col justify-center bg-white"
    >
      <Hero />
      <Details />
    </div>
  );
};

export default Porsche;
