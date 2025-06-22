"use client";

import { PText } from "@porsche-design-system/components-react";
import Image from "next/image";
import React from "react";
import { AnimatedNumber } from "./AnimatedNumber";

const StatsItem = ({
  value,
  unit,
  power,
  powerUnit,
  label,
}: {
  value: number | string;
  unit: string;
  power?: number;
  powerUnit?: string;
  label: string;
}) => (
  <div className="mb-10">
    <div className="mb-2 flex items-end gap-2">
      <AnimatedNumber number={Number(value)} />
      <span className="text-2xl">{unit}</span>

      {power !== undefined && powerUnit && (
        <>
          <AnimatedNumber number={Number(power)} />
          <span className="text-2xl">{powerUnit}</span>
        </>
      )}
    </div>
    <PText size="small" color="neutral-contrast-medium">
      {label}
    </PText>
  </div>
);

const Details = () => {
  return (
    <div className="mx-auto my-16 grid max-w-5xl grid-cols-1 items-center px-4 md:grid-cols-2">
      {/* Left: Stats */}
      <div className="flex flex-col justify-center text-left">
        <StatsItem value={3.2} unit="s" label="Acceleration 0 - 100 km/h" />
        <StatsItem
          value={386}
          unit="kW / "
          power={525}
          powerUnit="PS"
          label="Power (kW) / Power (PS)"
        />
        <StatsItem value={296} unit="km/h" label="Top speed" />
      </div>

      {/* Right: Car Image */}
      <div className="flex justify-center">
        <Image
          src="/porsche-front.avif"
          alt="Porsche Front"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Details;
