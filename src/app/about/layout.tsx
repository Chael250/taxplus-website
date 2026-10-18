import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Firm",
  description:
    "Learn about Taxplus Chambers Limited, a Kigali law firm founded in 2018 by experienced Rwandan legal practitioners and tax experts.",
};

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return children;
}
