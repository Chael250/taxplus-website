import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Practice Areas",
  description:
    "Taxplus Chambers Ltd advises on tax, corporate and commercial law, banking and finance, M&A, insurance, construction, energy and more in Rwanda.",
};

export default function PracticeAreasLayout({ children }: LayoutProps<"/practice-areas">) {
  return children;
}
