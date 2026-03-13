"use client";

import Link from "next/link";
import { Facebook, Youtube, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import TopographicBg from "@/components/ui/TopographicBg";

const footerLinks = {
  categories: [
    { label: "News", href: "/news" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "Sports", href: "/sports" },
    { label: "Technology", href: "/technology" },
    { label: "Travel", href: "/travel" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Health", href: "/health" },
    { label: "Fashion", href: "/fashion" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Advertise", href: "/advertise" },
  ],
  resources: [
    { label: "Magazine", href: "/magazine" },
    { label: "Videos", href: "/videos" },
    { label: "Podcasts", href: "/podcasts" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "RSS Feeds", href: "/rss" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/timesapplaud", icon: Facebook },
  { platform: "Youtube", url: "https://youtube.com/@TimesApplaud", icon: Youtube },
  { platform: "Instagram", url: "https://instagram.com/timesapplaud", icon: Instagram },
  { platform: "Twitter", url: "https://twitter.com/timesapplaud", icon: Twitter },
  { platform: "LinkedIn", url: "https://linkedin.com/company/timesapplaud", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1F1C] border-t border-[#2A2A2A]">
      {/* Subtle Topographic Background */}
      <div className="absolute inset-0 opacity-20">
        <TopographicBg animated={false} />
      </div>

      <div className="container-wide relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="font-display text-2xl md:text-3xl text-[#F5F0E8] hover:text-[#C9A84C] transition-colors">
                TIMES APPLAUD
              </h2>
            </Link>

            <p className="font-inter text-[#8A8A7C] leading-relaxed">
              Your trusted source for the latest news, entertainment, sports, technology, and lifestyle updates. 
              Delivering quality journalism since 2022.
            </p>

            {/* Social Links */}
            <div>
              <p className="font-mono-caps text-xs text-[#8A8A7C] mb-4">FOLLOW US</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
                      aria-label={social.platform}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <p className="font-mono-caps text-xs text-[#8A8A7C] mb-3">SUBSCRIBE TO OUR NEWSLETTER</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-2 text-sm text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C]"
                />
                <button
                  type="submit"
                  className="font-mono-caps text-xs px-4 py-2 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#D4B85E] transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="font-mono-caps text-xs text-[#8A8A7C] mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-mono-caps text-xs text-[#8A8A7C] mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-mono-caps text-xs text-[#8A8A7C] mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2A2A] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="font-jetbrains text-xs text-[#8A8A7C]">
              © {new Date().getFullYear()} Times Applaud Pvt. Ltd. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 font-jetbrains text-xs text-[#8A8A7C]">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="pb-8 pt-4 border-t border-[#2A2A2A]">
          <div className="font-jetbrains text-xs text-[#8A8A7C] space-y-1">
            <p>Registered Office: Samarth Complex, B Wing- 201, 2nd Floor, Bapista Compound,</p>
            <p>Jawahar Nagar, Goregaon West, Mumbai, India, Maharashtra</p>
            <p className="pt-2">Co-founded by Taushif Patel and Sunil Pandey | Incorporated under the Companies Act, 2013</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
