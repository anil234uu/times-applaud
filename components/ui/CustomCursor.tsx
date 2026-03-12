"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current || !glowRef.current) return;

      // Move cursor dot
      gsap.to(cursorRef.current, {
        x: e.clientX - 3,
        y: e.clientY - 3,
        duration: 0.1,
        ease: "power2.out",
      });

      // Move glow with slight delay for trail effect
      gsap.to(glowRef.current, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add hover state for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";

      setIsHovering(!!isInteractive);

      if (isInteractive && cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          backgroundColor: "#C9A84C",
          duration: 0.2,
        });
      } else if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#C9A84C",
          duration: 0.2,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={cursorRef}
        className={`custom-cursor fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-[#C9A84C] pointer-events-none z-[9999] mix-blend-difference ${
          isHovering ? "scale-150" : ""
        }`}
        style={{
          willChange: "transform",
        }}
      />

      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="custom-cursor fixed top-0 left-0 w-10 h-10 rounded-full bg-[#C9A84C]/20 blur-xl pointer-events-none z-[9998]"
        style={{
          willChange: "transform",
        }}
      />
    </>
  );
}
