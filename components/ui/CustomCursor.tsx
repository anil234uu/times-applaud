"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "link" | "button">("default");

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const cursorDot = document.querySelector(".custom-cursor-dot");
    const cursorCircle = document.querySelector(".custom-cursor-circle");

    const onMouseMove = (e: MouseEvent) => {
      if (!cursorDot || !cursorCircle) return;

      // Move dot instantly
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Move circle with slight delay for trailing effect
      gsap.to(cursorCircle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
        setCursorType(target.tagName === "A" ? "link" : "button");
      } else {
        setIsHovering(false);
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="custom-cursor">
        {/* Small dot */}
        <div className="custom-cursor-dot" />
        {/* Larger trailing circle */}
        <div 
          className="custom-cursor-circle"
          style={{
            transform: isHovering ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
            backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        />
      </div>
      <style jsx global>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        .custom-cursor-dot {
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .custom-cursor-circle {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, background-color 0.3s, transform 0.3s;
        }

        @media (hover: none) and (pointer: coarse) {
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
