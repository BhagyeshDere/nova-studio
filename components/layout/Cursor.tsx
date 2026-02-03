"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    /* Disable on touch devices */
    if ("ontouchstart" in window || window.innerWidth < 768) {
      cursor.style.display = "none";
      return;
    }

    /* Smooth follow */
    const move = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    /* Grow on hover */
    const hoverTargets = "a, button, h1, h2, h3, p, span";

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.closest(hoverTargets)) {
        cursor.classList.add("cursor-big");
      } else {
        cursor.classList.remove("cursor-big");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
