"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.3,
  variant = "primary",
  size = "md",
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = buttonRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      // Move button with magnetic effect
      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      });

      // Counter-rotate content to keep it level
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: -deltaX * 0.5,
          y: -deltaY * 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      // Spring back to original position
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    element.addEventListener("mousemove", handleMouseMove as EventListener);
    element.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener);
      element.removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, [strength]);

  const baseStyles = "relative inline-flex items-center justify-center font-mono-caps transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#D4B85E] glow-gold",
    secondary: "bg-[#B5654A] text-white hover:bg-[#C67357]",
    outline: "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        onClick={onClick}
        className={combinedClasses}
      >
        <span ref={contentRef} className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {/* Background shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      <span ref={contentRef} className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Background shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
    </button>
  );
}
