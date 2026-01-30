"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleEnter = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      const target = e.target as HTMLElement;

      // ❌ IGNORE NAVBAR
      if (target.closest("nav")) return;

      // ✅ Only grow on text/content elements
      if (
        target.closest("p") ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3") ||
        target.closest("h4") ||
        target.closest("h5") ||
        target.closest("span") ||
        target.closest("a") ||
        target.closest("button")
      ) {
        cursorRef.current.classList.add("cursor-big");
      }
    };

    const handleLeave = () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.remove("cursor-big");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
