import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Times Applaud | Breaking News, Entertainment, Sports & More",
  description: "Times Applaud delivers the latest updates in news, entertainment, sports, fashion, lifestyle, health tips, technology, and travel. Co-founded in 2022 by Taushif Patel and Sunil Pandey.",
  keywords: ["news", "entertainment", "sports", "technology", "lifestyle", "health", "fashion", "travel", "Times Applaud"],
  authors: [{ name: "Times Applaud Pvt. Ltd." }],
  openGraph: {
    title: "Times Applaud | Breaking News, Entertainment, Sports & More",
    description: "Your trusted source for news, entertainment, sports, and lifestyle updates.",
    url: "https://www.timesapplaud.com",
    siteName: "Times Applaud",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Times Applaud",
    description: "Breaking News, Entertainment, Sports & More",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
