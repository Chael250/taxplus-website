import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Taxplus Chambers",
  description:
    "Contact Taxplus Chambers Ltd in Kigali, Rwanda for tax, corporate, commercial, banking and finance legal advice.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
