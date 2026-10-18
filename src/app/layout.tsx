import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Taxplus Chambers Ltd | Corporate & Tax Law Firm | Kigali, Rwanda",
    template: "%s | Taxplus Chambers Ltd",
  },
  description:
    "Taxplus Chambers Ltd (Taxplus Chambers Limited) is a Kigali, Rwanda law firm offering tax, corporate, commercial, banking and finance legal services.",
  keywords: [
    "Taxplus Chambers Ltd",
    "Taxplus Chambers Limited",
    "Taxplus Rwanda",
    "Tax Plus Rwanda",
    "Taxplus",
    "Tax Plus",
    "law firm Kigali Rwanda",
    "tax law firm Rwanda",
    "corporate law Kigali",
    "Rwanda legal advisory",
    "tax advisory Rwanda",
  ],
  openGraph: {
    type: "website",
    locale: "en_RW",
    siteName: "Taxplus Chambers Ltd",
    title: "Taxplus Chambers Ltd | Corporate & Tax Law Firm | Kigali, Rwanda",
    description:
      "Kigali-based legal advice in tax, corporate, commercial, banking and finance law.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Taxplus Chambers Ltd",
              alternateName: ["Taxplus Chambers Limited", "Taxplus", "Tax Plus"],
              description:
                "A law firm in Kigali, Rwanda offering tax, corporate, commercial, banking and finance legal services.",
              areaServed: ["Kigali", "Rwanda", "East Africa"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kigali",
                addressCountry: "RW",
              },
              ...(siteUrl ? { url: siteUrl } : {}),
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
