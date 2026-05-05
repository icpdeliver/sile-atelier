"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
