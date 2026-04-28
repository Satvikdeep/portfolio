import type { Metadata } from "next";
import { Syne, DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-family-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-family-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-family-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhanvi Vora — Copywriter & Marketing Creative",
  description:
    "Creative portfolio of Dhanvi Vora. Words that make people feel something, remember something, and do something. Across travel, tourism, healthcare, events, and more.",
  keywords: [
    "copywriter",
    "marketing creative",
    "content writer",
    "brand strategy",
    "Dhanvi Vora",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSerif.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
