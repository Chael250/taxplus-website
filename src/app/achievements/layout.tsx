import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Achievements",
  description:
    "Explore Taxplus Chambers Ltd's work and milestones in Rwandan tax, corporate, banking and commercial law.",
};

export default function AchievementsLayout({ children }: LayoutProps<"/achievements">) {
  return children;
}
