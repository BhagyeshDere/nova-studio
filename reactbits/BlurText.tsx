"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo, CSSProperties } from "react";

const buildKeyframes = (from: any, steps: any[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
  const keyframes: any = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

type Props = {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  style?: CSSProperties;        // ✅ added
};

export default function BlurText({
  text,
  delay = 120,
  className = "",
  animateBy = "words",
  direction = "top",
  style,                        // ✅ added
}: Props) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const from = useMemo(() => (
    direction === "top"
      ? { filter: "blur(12px)", opacity: 0, y: -60 }
      : { filter: "blur(12px)", opacity: 0, y: 60 }
  ), [direction]);

  const to = useMemo(() => ([
    { filter: "blur(6px)", opacity: 0.6, y: 10 },
    { filter: "blur(0px)", opacity: 1, y: 0 }
  ]), []);

  const keyframes = buildKeyframes(from, to);

  return (
    <p
      ref={ref}
      className={`flex flex-wrap ${className}`}
      style={style}              // ✅ applied
    >
      {elements.map((seg, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={from}
          animate={inView ? keyframes : from}
          transition={{
            duration: 0.9,
            delay: (i * delay) / 1000,
            ease: "easeOut"
          }}
        >
          {seg}{animateBy === "words" && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
}
