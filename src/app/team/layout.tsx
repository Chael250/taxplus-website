import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legal Team",
  description:
    "Meet the experienced lawyers and tax professionals at Taxplus Chambers Ltd in Kigali, Rwanda.",
};

export default function TeamLayout({ children }: LayoutProps<"/team">) {
  return children;
}
