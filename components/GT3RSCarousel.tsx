import { PCarousel, PText } from "@porsche-design-system/components-react";
import Image from "next/image";

const cards = [
  {
    title: "Chassis control systems.",
    description:
      "The electronic adjustment of the shock absorber system – Porsche Active Suspension Management (PASM) – regulates the damper force for each wheel. Porsche Stability Management (PSM) ensures stabilisation at the limits of the driving dynamics.",
    image: "/chassis.avif",
  },
  {
    title: "Maximum performance.",
    description:
      "As soon as the starting light goes out, the 911 GT3 RS delivers unbelievable performance on the race track.",
    image: "/brakes.avif",
  },
  {
    title: "Rear-axle steering",
    description:
      "The rear-axle steering system is electronically controlled and can be adjusted in a range of up to 2.8 degrees. This means that the rear wheels turn in the opposite direction to the front wheels at low speeds, and in the same direction at high speeds. This increases the agility of the vehicle and improves its cornering behaviour.",
    image: "/rear.avif",
  },
];

const loopCards = [...cards, ...cards, ...cards];

export function GT3RSCarousel() {
  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16">
      <PCarousel>
        {loopCards.map((card, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col gap-4">
              <PText size="large" weight="semibold">
                {card.title}
              </PText>
              <PText size="small" color="neutral-contrast-medium">
                {card.description}
              </PText>
            </div>
          </div>
        ))}
      </PCarousel>
    </div>
  );
}
