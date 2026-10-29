"use client";

import Link from "next/link";
import { UserRole } from "@/data/users";

interface BalanceHeaderProps {
  role: UserRole;
  userName?: string;
}

export default function BalanceHeader({ role, userName }: BalanceHeaderProps) {
  return (
    <div className="flex flex-col gap-3">

      {/* Page Title */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl md:text-4xl text-ink tracking-tight font-semibold">
          Koinmu, peluang berikutnya.
        </h1>
        <p className="text-sm md:text-base text-ink-muted leading-relaxed">
          {userName
            ? `Hai, ${userName}. `
            : ""}
          Pantau saldo dan penggunaan koin dengan transparan.
        </p>
      </div>
    </div>
  );
}
