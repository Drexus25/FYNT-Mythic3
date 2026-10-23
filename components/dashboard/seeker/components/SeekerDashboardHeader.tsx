"use client";

interface SeekerDashboardHeaderProps {
  userName?: string;
}

export default function SeekerDashboardHeader({
  userName = "Ayu",
}: SeekerDashboardHeaderProps) {
  return (
    <section className="flex flex-col gap-2 pt-8">
      <h1 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight">
        Setiap lamaran, satu langkah lebih dekat.
      </h1>
      <p className="text-sm md:text-base text-ink-muted leading-relaxed">
        Hai, {userName}. Pantau perkembangan lamaran dan siapkan langkah berikutnya.
      </p>
    </section>
  );
}
