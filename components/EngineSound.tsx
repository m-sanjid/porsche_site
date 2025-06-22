"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";

const AUDIO_SRC =
  "https://assets-v2.porsche.com/int/-/media/Project/PCOM/SharedSite/Models/911/911-gt3-rs/052/911-gt3-rs-enginesound";

const EngineSound = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#666",
      progressColor: "#fff",
      height: 80,
      barWidth: 2,
      barGap: 1,
      cursorWidth: 0,
      normalize: true,
    });

    wavesurfer.load(AUDIO_SRC);
    wavesurferRef.current = wavesurfer;

    return () => {
      wavesurfer.destroy();
      wavesurferRef.current = null;
    };
  }, []);

  const handlePlay = () => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-black p-10 text-white shadow-lg md:p-40">
      <Image
        src="/rear.avif"
        alt="Porsche"
        width={1000}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Text & CTA */}
      <div className="relative z-10 rounded-xl bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-12 text-center">
        <h2 className="mb-2 text-3xl leading-tight font-semibold md:text-4xl">
          Set the pace: <span className="text-red-500">9,000 RPM</span>
        </h2>
        <p className="mb-6 text-lg text-neutral-300">
          Naturally aspirated engine. Unfiltered sound. Just hold to roar.
        </p>
        <button
          onMouseDown={handlePlay}
          onMouseUp={handlePause}
          onTouchStart={handlePlay}
          onTouchEnd={handlePause}
          aria-pressed={isPlaying}
          className="z-50 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition duration-200 hover:bg-neutral-200 active:scale-95"
        >
          ▶ Hold for Sound
        </button>
      </div>

      {/* Waveform */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <div
          ref={containerRef}
          className="z-0 h-full w-[10rem] overflow-hidden rounded-2xl border border-white/20 bg-white/5 px-4 py-2"
        />
      </div>
    </div>
  );
};

export default EngineSound;
