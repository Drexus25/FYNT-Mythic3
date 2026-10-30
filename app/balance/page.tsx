import type { Metadata } from "next";
import BalanceContainer from "@/components/balance/container/BalanceContainer";

export const metadata: Metadata = {
  title: "Dompet Koin | FYNT",
  description:
    "Pantau saldo koin dan riwayat transaksi kamu di FYNT — platform rekrutmen transparan.",
};

export default function BalancePage() {
  return <BalanceContainer />;
}
