import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Montgomery Pool Services | Pool Repair, Remodeling & Maintenance | Montgomery TX",
  description:
    "Family & veteran-owned pool service company in Montgomery, TX. 20+ years experience in pool repair, remodeling, equipment service, and weekly maintenance. Serving Montgomery, Conroe, Magnolia & The Woodlands.",
  keywords: [
    "pool service Montgomery TX",
    "pool repair Montgomery Texas",
    "pool remodeling Montgomery TX",
    "pool maintenance Conroe TX",
    "pool equipment repair Magnolia TX",
    "swimming pool service The Woodlands",
    "veteran owned pool company",
  ],
  openGraph: {
    title: "Montgomery Pool Services | Trusted Pool Care Since 2004",
    description:
      "Family & veteran-owned. 20+ years of expert pool repair, remodeling, and maintenance in Montgomery County.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-pool-slate">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
