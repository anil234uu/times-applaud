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
    <footer className="relative bg-black border-t border-[#222222]">
      <div className="container-wide relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="font-display text-2xl md:text-3xl text-white opacity-90 hover:opacity-100 transition-opacity">
                TIMES APPLAUD
              </h2>
            </Link>

            <p className="text-body leading-relaxed">
              Your trusted source for the latest news, entertainment, sports, technology, and lifestyle updates. 
              Delivering quality journalism since 2022.
            </p>

            {/* Social Links */}
            <div>
              <p className="text-nav text-xs text-[#666666] mb-4">FOLLOW US</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[#222222] flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
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
              <p className="text-nav text-xs text-[#666666] mb-3">SUBSCRIBE TO OUR NEWSLETTER</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-[#222222] px-4 py-2 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors font-mono"
                />
                <button
                  type="submit"
                  className="text-button px-6 py-2 bg-white text-black hover:bg-[#cccccc] transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-nav text-xs text-[#666666] mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-nav text-sm text-white opacity-70 hover:opacity-100 transition-opacity block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-nav text-xs text-[#666666] mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-nav text-sm text-white opacity-70 hover:opacity-100 transition-opacity block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-nav text-xs text-[#666666] mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-nav text-sm text-white opacity-70 hover:opacity-100 transition-opacity block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222222] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-meta text-[#666666]">
              © {new Date().getFullYear()} Times Applaud Pvt. Ltd. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-meta text-[#666666]">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="pb-8 pt-4 border-t border-[#222222]">
          <div className="text-meta text-[#666666] space-y-1">
            <p>Registered Office: Samarth Complex, B Wing- 201, 2nd Floor, Bapista Compound,</p>
            <p>Jawahar Nagar, Goregaon West, Mumbai, India, Maharashtra</p>
            <p className="pt-2">Co-founded by Taushif Patel and Sunil Pandey | Incorporated under the Companies Act, 2013</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
