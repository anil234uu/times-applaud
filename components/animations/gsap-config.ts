"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default ScrollTrigger settings
ScrollTrigger.defaults({
  markers: false,
  toggleActions: "play none none reverse",
});

// Custom easing functions matching our CSS variables
export const easings = {
  outExpo: "expo.out",
  outQuart: "quart.out",
  inOutCubic: "circ.inOut",
  spring: "elastic.out(1, 0.5)",
};

// Animation presets for consistent use across components
export const animations = {
  // Fade in and slide up
  fadeInUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: easings.outExpo },
  },
  // Fade in and slide down
  fadeInDown: {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: easings.outExpo },
  },
  // Scale in
  scaleIn: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: easings.outExpo },
  },
  // Clip reveal (for text)
  clipReveal: {
    from: { clipPath: "inset(100% 0% 0% 0%)" },
    to: { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: easings.outExpo },
  },
  // Stagger children
  staggerFadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: easings.outExpo, stagger: 0.1 },
  },
};

// Helper function to create scroll-triggered animations
export function createScrollAnimation(
  element: gsap.TweenTarget,
  animation: { from: gsap.TweenVars; to: gsap.TweenVars },
  triggerElement?: Element | string,
  start: string = "top 80%"
) {
  return gsap.fromTo(element, animation.from, {
    ...animation.to,
    scrollTrigger: {
      trigger: triggerElement || (element as unknown as Element),
      start,
      toggleActions: "play none none reverse",
    },
  });
}

// Text scramble effect
export function createTextScramble(
  element: HTMLElement,
  finalText: string,
  duration: number = 1
) {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let iteration = 0;
  const interval = duration * 1000 / finalText.length / 3;

  const animate = () => {
    element.textContent = finalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return finalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iteration < finalText.length) {
      iteration += 1 / 3;
      requestAnimationFrame(animate);
    }
  };

  animate();
}

// Magnetic effect for buttons
export function createMagneticEffect(element: HTMLElement, strength: number = 0.3) {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

export { gsap, ScrollTrigger };
