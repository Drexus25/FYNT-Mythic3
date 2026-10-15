"use client";

import FlowBanner from "../components/FlowBanner";
import HeroSection from "../components/HeroSection";
import HighlightedJob from "../components/HighlightedJob";
import MissionBorder from "../components/MissionBorder";
import RoleCard from "../components/RoleCard";

export default function LandingContainer() {
  return (
    <main className="flex flex-col gap-16 bg-paper">
      <section>
        <HeroSection />
        <MissionBorder />
      </section>
      <section>
        <RoleCard />
      </section>
      <section>
        <HighlightedJob />
      </section>
      <section>
        <FlowBanner />
      </section>
    </main>
  );
}
