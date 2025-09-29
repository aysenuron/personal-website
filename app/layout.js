import { Geist, Geist_Mono } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Ayşenur Onaran",
  description: "Web Developer & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qkm8iol.css" />
      </head>
      <body className="prose">
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
