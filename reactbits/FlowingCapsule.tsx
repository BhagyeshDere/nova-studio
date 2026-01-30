"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

type CapsuleProps = {
  text: string;
  image: string;
  speed?: number;
  textColor?: string;
  borderColor?: string;
};

export default function FlowingCapsule({
  text,
  image,
  speed = 20,
  textColor = "#000000",                 // ✅ default BLACK text
  borderColor = "rgba(0,0,0,0.15)",       // ✅ light black border
}: CapsuleProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!innerRef.current) return;

    const width = innerRef.current.scrollWidth;

    gsap.to(innerRef.current, {
      x: -width / 2,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed]);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-full bg-white"
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div className="absolute inset-0 flex items-center">
        <div
          ref={innerRef}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              
              {/* TEXT */}
              <span
                className="uppercase font-medium tracking-wide"
                style={{
                  color: textColor,        // ✅ black text
                  fontSize: "1.3vw",
                  padding: "0 1.6vw",
                }}
              >
                {text}
              </span>

              {/* IMAGE */}
              <div
                className="flex-shrink-0 rounded-full"
                style={{
                  width: "9vw",
                  height: "4.5vw",
                  margin: "0 1.4vw",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
