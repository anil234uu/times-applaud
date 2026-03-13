"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Search, Globe } from "lucide-react";
import { navigationItems, breakingNewsItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

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
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.98)" : "rgba(0, 0, 0, 0.95)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        borderBottomColor: "#222222",
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
      {/* Breaking News Ticker - Mashvp Style */}
      <div className="fixed top-0 left-0 right-0 z-[999] bg-black text-white overflow-hidden border-b border-[#222222]">
        <div className="flex items-center">
          <div className="relative px-4 py-2 whitespace-nowrap z-10 flex items-center gap-2">
            {/* Pulsing Red Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="font-mono text-[10px] font-bold tracking-wider text-red-500 uppercase">
              Breaking
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee flex gap-16 py-2">
              {[...breakingNewsItems, ...breakingNewsItems].map((news, index) => (
                <span
                  key={index}
                  className="text-sm font-medium tracking-tight opacity-80 hover:opacity-100 transition-opacity duration-300"
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
          isScrolled ? "border-[#222222]" : "border-[#222222]"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-nav text-white opacity-70 hover:opacity-100 transition-opacity relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Utility Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchExpanded(!searchExpanded)}
                className="p-2 text-white opacity-70 hover:opacity-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <button
                className="hidden md:flex p-2 text-white opacity-70 hover:opacity-100 transition-colors"
                aria-label="Language"
              >
                <Globe className="w-5 h-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white opacity-70 hover:opacity-100 transition-colors"
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
              className="w-0 h-10 bg-transparent border-b border-white text-white placeholder:text-[#666666] focus:outline-none font-mono text-sm"
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
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-black border-l border-[#222222] p-8 pt-24">
          <nav className="flex flex-col gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl text-white opacity-70 hover:opacity-100 transition-opacity"
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
          <div className="mt-12 pt-8 border-t border-[#222222]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-nav text-[#999999] opacity-70 hover:opacity-100 transition-opacity"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-nav text-[#999999] opacity-70 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
              <Link
                href="/subscribe"
                className="text-nav text-[#999999] opacity-70 hover:opacity-100 transition-opacity"
              >
                Subscribe
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="mt-auto pt-8">
            <p className="text-nav text-xs text-[#666666] mb-4">FOLLOW US</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/timesapplaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#222222] flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
              >
                FB
              </a>
              <a
                href="https://youtube.com/@TimesApplaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#222222] flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
              >
                YT
              </a>
              <a
                href="https://instagram.com/timesapplaud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#222222] flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
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
