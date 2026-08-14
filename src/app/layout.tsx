import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Window Cleaning & Detailing in Charlotte, NC | Founders Window Care`,
    template: `%s | ${site.name}`,
  },
  description:
    "Founders Window Care & Detailing — residential, commercial, and auto detailing in Charlotte, NC. Free quotes, flat pricing, streak-free guarantee.",
  openGraph: {
    title: `Window Cleaning & Detailing in Charlotte, NC | Founders Window Care`,
    description:
      "Residential, commercial, and auto detailing in Charlotte, NC. Free quotes, flat pricing, streak-free guarantee.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
