"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface LoadingStep {
  percentage: number;
  text: string;
}

const loadingSteps: LoadingStep[] = [
  { percentage: 0, text: "Scanning the headlines..." },
  { percentage: 23, text: "Curating today's stories..." },
  { percentage: 56, text: "Loading entertainment feed..." },
  { percentage: 78, text: "Deploying sports updates..." },
  { percentage: 91, text: "Activating breaking news..." },
  { percentage: 100, text: "Welcome to Times Applaud" },
];

export default function PreLoader() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Auto-complete after all steps
    const timer = setTimeout(() => {
      setIsComplete(true);
      // Remove preloader from DOM after fade out
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => Math.min(prev + 1, loadingSteps.length));
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    // Animate each step
    if (currentStep > 0 && currentStep <= loadingSteps.length) {
      const step = loadingSteps[currentStep - 1];
      
      // Animate progress bar
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: `${step.percentage}%`,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      // Animate text with scramble effect
      const textElement = textRefs.current[currentStep - 1];
      if (textElement) {
        const words = step.text.split(" ");
        
        // Create text scramble animation
        const chars = "!<>-_\\/[]{}—=+*^?#________";
        let iteration = 0;
        
        const animateText = () => {
          textElement.textContent = step.text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return letter;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          if (iteration < step.text.length) {
            iteration += 1 / 2;
            requestAnimationFrame(animateText);
          }
        };
        
        animateText();
      }
    }
  }, [currentStep]);

  // Prevent scroll when preloader is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setIsComplete(true);
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 800);
  };

  if (isComplete) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
    >
      {/* Logo/Title */}
      <div className="mb-12">
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter text-[#F5F0E8]"
          style={{ opacity: 0 }}
          ref={(el) => {
            if (el) {
              gsap.to(el, { opacity: 1, duration: 1, delay: 0.2 });
            }
          }}
        >
          TIMES APPLAUD
        </h1>
        <p className="font-mono-caps mt-2 text-xs md:text-sm text-[#C9A84C]">
          EST. 2022
        </p>
      </div>

      {/* Loading Progress */}
      <div className="w-full max-w-md px-8">
        {/* Percentage Counter */}
        <div className="flex items-end gap-2 mb-4 font-jetbrains text-2xl md:text-3xl text-[#C9A84C]">
          <span className="tabular-nums">
            {loadingSteps[currentStep]?.percentage || 100}
          </span>
          <span className="text-sm text-[#8A8A7C]">%</span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1 w-full bg-[#1A1A1A] overflow-hidden">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C9A84C] to-[#B5654A]"
            style={{ width: "0%" }}
          />
        </div>

        {/* Loading Text */}
        <div className="mt-6 min-h-[24px]">
          {loadingSteps.map((step, index) => (
            <span
              key={step.percentage}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className={cn(
                "block font-jetbrains text-sm md:text-base transition-opacity duration-300",
                index === currentStep - 1
                  ? "text-[#C9A84C] opacity-100"
                  : index < currentStep - 1
                  ? "text-[#8A8A7C] opacity-50"
                  : "opacity-0"
              )}
            >
              {step.text}
            </span>
          ))}
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 font-mono-caps text-xs text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
        aria-label="Skip loading"
      >
        SKIP →
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 font-mono-caps text-xs text-[#8A8A7C]">
        LOADING SEQUENCE
      </div>
      <div className="absolute top-8 right-8 font-mono-caps text-xs text-[#8A8A7C]">
        INITIALIZING...
      </div>
    </div>
  );
}
