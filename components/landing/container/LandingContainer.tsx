"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FlowBanner from "../components/FlowBanner";
import HeroSection from "../components/HeroSection";
import HighlightedJob from "../components/HighlightedJob";
import MissionBorder from "../components/MissionBorder";
import RoleCard from "../components/RoleCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LandingContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Hero: ambient floating orbs ──────────────────────────────
      gsap.to(".hero-glow-1", {
        y: 35,
        x: -20,
        scale: 1.1,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-2", {
        y: -30,
        x: 25,
        scale: 1.15,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── Hero: staggered entrance timeline ────────────────────────
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-eyebrow", {
          y: -25,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(1.7)",
        })
        .from(
          ".hero-heading",
          { y: 40, opacity: 0, filter: "blur(8px)", duration: 1 },
          "-=0.5"
        )
        .from(
          ".hero-subtitle",
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.6"
        )
        .from(
          ".hero-search-box",
          { y: 35, opacity: 0, scale: 0.96, duration: 0.85, ease: "back.out(1.4)" },
          "-=0.5"
        )
        .from(
          ".hero-hint",
          { y: 15, opacity: 0, duration: 0.6 },
          "-=0.4"
        );

      // ── Mission border: staggered badges ────────────────────────
      gsap.from(".mission-item", {
        scrollTrigger: {
          trigger: ".mission-border-container",
          start: "top 92%",
          toggleActions: "play none none none",
        },
        y: 25,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.12,
        ease: "back.out(1.5)",
      });

      // ── Role cards: scroll-triggered reveal ─────────────────────
      // Use onEnter callback instead of toggleActions to be more reliable
      gsap.from(".role-card-item", {
        scrollTrigger: {
          trigger: ".role-cards-container",
          start: "top 95%",
          once: true,
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.85,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Role cards: GSAP hover lift
      const roleCards = gsap.utils.toArray<HTMLElement>(".role-card-item");
      roleCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -6,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // ── Highlighted jobs ─────────────────────────────────────────
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".highlight-section",
            start: "top 88%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        })
        .from(".highlight-header-info", { x: -35, opacity: 0, duration: 0.8 })
        .from(".highlight-header-action", { x: 35, opacity: 0, duration: 0.8 }, "<")
        .from(".highlight-carousel", { y: 40, opacity: 0, duration: 0.9, ease: "power2.out" }, "-=0.4");

      // ── Flow steps ───────────────────────────────────────────────
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".flow-section",
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        })
        .from(".flow-heading", { y: 30, opacity: 0, duration: 0.7 })
        .from(".flow-step-item", { y: 40, opacity: 0, duration: 0.8, stagger: 0.18 }, "-=0.3")
        .from(".flow-step-line", { scaleX: 0, duration: 0.8, stagger: 0.18, ease: "power2.inOut" }, "-=0.7");

      // ── CTA banner ───────────────────────────────────────────────
      gsap.from(".flow-cta-banner", {
        scrollTrigger: {
          trigger: ".flow-cta-banner",
          start: "top 95%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="flex flex-col gap-16 bg-paper overflow-hidden">
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
