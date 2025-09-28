import { Geist, Geist_Mono } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YXYJQJ2LRF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YXYJQJ2LRF');
    `}
        </Script>
        <script src="https://cmp.osano.com/FctbZX4sas/39fc305e-f88c-42f4-aa36-8efe8e29fc26/osano.js"></script>
        <link rel="stylesheet" href="https://use.typekit.net/qkm8iol.css" />
      </head>
      <body className="prose">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
