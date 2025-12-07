"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider(): null {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      lerp: isMobile ? 0.03 : 0.1,          // smoother + more responsive on mobile
      smoothWheel: !isMobile,              // disable unnecessary wheel logic on mobile
      touchMultiplier: isMobile ? 1 : 1.5, // natural touch feel
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
