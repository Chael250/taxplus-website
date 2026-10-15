"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation,
  direction,
  delay = 0,
}: ScrollRevealProps) {
  // Map direction to animation if direction is provided
  const resolvedAnimation = animation ?? (
    direction === "left" ? "slide-in-left" :
    direction === "right" ? "slide-in-right" :
    "fade-in-up"
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible", `animate-${resolvedAnimation}`);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [resolvedAnimation, delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
