"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Search, Globe } from "lucide-react";
import { navigationItems, breakingNewsItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for header background on scroll
  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.98)" : "rgba(10, 10, 10, 0.95)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        borderBottomColor: isScrolled ? "#2A2A2A" : "#2A2A2A",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, [isScrolled]);

  // Expand search input
  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      gsap.to(searchInputRef.current, {
        width: "100%",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      setTimeout(() => searchInputRef.current?.focus(), 300);
    } else if (searchInputRef.current) {
      gsap.to(searchInputRef.current, {
        width: "0",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [searchExpanded]);

  // Mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Breaking News Ticker */}
      <div className="fixed top-0 left-0 right-0 z-[999] bg-[#D32F2F] text-white overflow-hidden">
        <div className="flex items-center">
          <div className="bg-[#B71C1C] px-4 py-2 font-mono-caps text-xs whitespace-nowrap z-10">
            BREAKING
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee flex gap-16 py-2">
              {[...breakingNewsItems, ...breakingNewsItems].map((news, index) => (
                <span
                  key={index}
                  className="font-inter text-sm md:text-base whitespace-nowrap"
                >
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={cn(
          "fixed top-10 left-0 right-0 z-[998] transition-all duration-300 border-b",
          isScrolled ? "border-[#2A2A2A]" : "border-transparent"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="font-display text-xl md:text-2xl lg:text-3xl tracking-tighter text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                TIMES APPLAUD
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-mono-caps text-xs text-[#F5F0E8] hover:text-[#C9A84C] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Utility Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchExpanded(!searchExpanded)}
                className="p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <button
                className="hidden md:flex p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                aria-label="Language"
              >
                <Globe className="w-5 h-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="overflow-hidden">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search articles, topics..."
              className="w-0 h-10 bg-transparent border-b border-[#C9A84C] text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none font-jetbrains text-sm"
              style={{ opacity: 0 }}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[999] lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#0A0A0A] border-l border-[#2A2A2A] p-8 pt-24">
          <nav className="flex flex-col gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                style={{
                  opacity: isMobileMenuOpen ? 0 : 0,
                  transform: isMobileMenuOpen ? "translateX(20px)" : "translateX(0)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/about"
                className="font-mono-caps text-sm text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="font-mono-caps text-sm text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/subscribe"
                className="font-mono-caps text-sm text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
              >
                Subscribe
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="mt-auto pt-8">
            <p className="font-mono-caps text-xs text-[#8A8A7C] mb-4">FOLLOW US</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/timesapplaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                FB
              </a>
              <a
                href="https://youtube.com/@TimesApplaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                YT
              </a>
              <a
                href="https://instagram.com/timesapplaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                IG
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
