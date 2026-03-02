import type { Metadata } from "next";
import "./globals.css";
import ShootingStars from "@/components/ShootingStars";

export const metadata: Metadata = {
  title: "Satvik — Software Developer",
  description:
    "Satvik's personal portfolio. Builder of real-time systems, low-level engines, and clean frontends. Based in Delhi, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ShootingStars />

        {children}
      </body>
    </html>
  );
}
