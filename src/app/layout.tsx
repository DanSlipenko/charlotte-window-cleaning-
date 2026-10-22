import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { BusinessSchema } from "@/components/BusinessSchema";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuoteModalProvider } from "@/components/QuoteModal";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <BusinessSchema />
        <QuoteModalProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
