"use client";

import { useCurrentUser } from "@/data/users";
import BalanceHeader from "../components/BalanceHeader";
import CoinCard from "../components/CoinCard";
import Link from "next/link";

export default function BalanceContainer() {
  const user = useCurrentUser();

  // ── Guard: not logged in ───────────────────────────────────────────────
  if (!user) {
    return (
      <div className="w-full min-h-screen bg-paper pt-32 pb-20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-sm px-4">
          <p className="text-ink font-semibold text-lg">
            Kamu belum masuk
          </p>
          <p className="text-sm text-ink-muted leading-relaxed">
            Masuk terlebih dahulu untuk melihat saldo dan riwayat koinmu.
          </p>
          <Link
            href="/login"
            className="bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all"
          >
            Masuk sekarang
          </Link>
        </div>
      </div>
    );
  }

  const role = user.role;
  const coins = user.coins ?? 0;
  const firstName = user.name.trim().split(" ")[0];

  const handleTopUp = (amount: number) => {
    // TODO: integrate real payment gateway
    console.log(`Proceed to top up ${amount} coins`);
    alert(`Kamu akan melanjutkan pembayaran untuk ${amount} koin. (Halaman pembayaran belum aktif.)`);
  };

  return (
    <div className="w-full min-h-screen bg-paper pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

        {/* Page Header */}
        <BalanceHeader role={role} userName={firstName} />

        {/* Coin card with embedded top-up */}
        <CoinCard coins={coins} role={role} onProceed={handleTopUp} />
      </div>
    </div>
  );
}
