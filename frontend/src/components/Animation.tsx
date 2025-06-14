"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Value	Meaning
// 0.9	Base scale (minimum size at screen edge).
// 1.5 - 0.7	Scale range adjustment (0.6).
// 0.8	Base opacity (minimum at screen edge).
// 0.2	Additional opacity (when at center).
// * 10	Multiplier to convert scale to zIndex. The higher the scale, the higher the zIndex

const ITS_AVERAGE = 2;
const BASE_SCALE = 1;
const MIN_SCALE = 0.7;
const MAX_SCALE = 1.5;

const BASE_OPACITY = 0.9;
const OPACITY_INCREASE = 0.2;

type Phone = {
  id: number;
  imgSrc: string;
  alt: string;
};

function PhoneAnimation() {
  const globeRef = useRef<HTMLDivElement>(null);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Phone images data
  const phones: Phone[] = [
    { id: 1, imgSrc: "/images/iphone-1.png", alt: "Phone 1" },
    { id: 2, imgSrc: "/images/iphone-2.png", alt: "Phone 2" },
    { id: 3, imgSrc: "/images/iphone-3.png", alt: "Phone 3" },
    { id: 4, imgSrc: "/images/iphone-4.png", alt: "Phone 4" },
    { id: 5, imgSrc: "/images/redmi-1.webp", alt: "Phone 5" },
    { id: 6, imgSrc: "/images/redmi-2.webp", alt: "Phone 6" },
  ];

  // Update z-index and scaling based on position
  useEffect(() => {
    if (!globeRef.current) return;

    let frameId: number;

    const updatePhones = () => {
      phoneRefs.current.forEach((phoneEl) => {
        if (!phoneEl) return;

        // Get the bounding rectangle of the phone element

        const rect = phoneEl.getBoundingClientRect();

        // Calculate the element's center position relative to the viewport
        const centerX = rect.left + rect.width / ITS_AVERAGE;
        const centerY = rect.top + rect.height / ITS_AVERAGE;

        // Calculate distance from viewport center (you can adjust this to your globe's center)
        const viewportCenterX = window.innerWidth / ITS_AVERAGE;
        const viewportCenterY = window.innerHeight / ITS_AVERAGE;

        const distanceFromCenter = Math.sqrt(
          Math.pow(centerX - viewportCenterX, 2) +
            Math.pow(centerY - viewportCenterY, 2)
        );

        // Normalize the distance (adjust these values based on your needs)
        const maxDistance = Math.min(viewportCenterX, viewportCenterY);
        const normalizedDistance = Math.min(
          distanceFromCenter / maxDistance,
          1
        );

        // Apply scaling based on position - closer to center gets larger
        const scale =
          BASE_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - normalizedDistance);
        phoneEl.style.scale = scale.toString();

        phoneEl.style.opacity = (
          BASE_OPACITY +
          OPACITY_INCREASE * (1 - normalizedDistance)
        ).toString();

        // Set z-index based on scale (larger items should appear above smaller ones)
        phoneEl.style.zIndex = Math.floor(scale * 20).toString();
      });

      frameId = requestAnimationFrame(updatePhones);
    };

    frameId = requestAnimationFrame(updatePhones);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="phone-globe-container w-full max-w-2xl h-96 relative">
        <div ref={globeRef} className="phone-globe w-full h-full">
          {phones.map((phone, index) => {
            const angle = (360 / phones.length) * index;

            return (
              <div
                key={phone.id}
                ref={(el) => {
                  phoneRefs.current[index] = el;
                }}
                className="phone-item absolute"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(150px)`,
                  transition: "scale .3s ease, opacity 0.3s ease",
                }}
              >
                <div className="w-28 h-40 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={phone.imgSrc}
                    alt={phone.alt}
                    width={106}
                    height={170}
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhoneAnimation;
