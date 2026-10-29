// ── Types ──────────────────────────────────────────────────────────────────

export type TransactionType = "credit" | "debit";

export type TransactionCategory =
  | "bonus_registration"    // koin bonus saat daftar
  | "topup"                 // pembelian koin
  | "apply_job"             // melamar lowongan (seeker - debit)
  | "post_job"              // posting lowongan (recruiter - debit)
  | "refund"                // pengembalian koin
  | "reward";               // hadiah / program lainnya

export interface Transaction {
  id: string;
  type: TransactionType;
  category: TransactionCategory;
  description: string;
  detail?: string;       // e.g. job title / company name
  date: string;          // ISO 8601 string
  amount: number;        // absolute value (always positive)
}

// ── Mock data: Seeker ──────────────────────────────────────────────────────

export const SEEKER_TRANSACTIONS: Transaction[] = [
  {
    id: "txn_sk_001",
    type: "credit",
    category: "bonus_registration",
    description: "Bonus pendaftaran",
    detail: "Pencari kerja · Berhasil",
    date: "2026-10-12T08:00:00+07:00",
    amount: 2,
  },
  {
    id: "txn_sk_002",
    type: "debit",
    category: "apply_job",
    description: "Biaya melamar lowongan",
    detail: "Product Designer · Nusa Studio",
    date: "2026-10-20T10:15:00+07:00",
    amount: 1,
  },
  {
    id: "txn_sk_003",
    type: "debit",
    category: "apply_job",
    description: "Biaya melamar lowongan",
    detail: "UI/UX Designer · Orbit Digital",
    date: "2026-10-19T09:30:00+07:00",
    amount: 1,
  },
  {
    id: "txn_sk_004",
    type: "credit",
    category: "topup",
    description: "Pembelian koin",
    detail: "5 koin · Transfer Bank",
    date: "2026-10-18T14:00:00+07:00",
    amount: 5,
  },
  {
    id: "txn_sk_005",
    type: "debit",
    category: "apply_job",
    description: "Biaya melamar lowongan",
    detail: "Product Designer · Akar Tech",
    date: "2026-10-18T11:00:00+07:00",
    amount: 1,
  },
  {
    id: "txn_sk_006",
    type: "debit",
    category: "apply_job",
    description: "Biaya melamar lowongan",
    detail: "UX Researcher · Ruang Karya",
    date: "2026-10-16T08:45:00+07:00",
    amount: 1,
  },
  {
    id: "txn_sk_007",
    type: "credit",
    category: "reward",
    description: "Hadiah tantangan profil",
    detail: "Profil 100% lengkap",
    date: "2026-10-15T16:00:00+07:00",
    amount: 1,
  },
  {
    id: "txn_sk_008",
    type: "debit",
    category: "apply_job",
    description: "Biaya melamar lowongan",
    detail: "UI Designer · Sora Digital",
    date: "2026-10-12T09:00:00+07:00",
    amount: 1,
  },
];

// ── Mock data: Recruiter ───────────────────────────────────────────────────

export const RECRUITER_TRANSACTIONS: Transaction[] = [
  {
    id: "txn_rc_001",
    type: "credit",
    category: "bonus_registration",
    description: "Bonus pendaftaran",
    detail: "Recruiter · Berhasil",
    date: "2026-10-01T08:00:00+07:00",
    amount: 3,
  },
  {
    id: "txn_rc_002",
    type: "credit",
    category: "topup",
    description: "Pembelian koin",
    detail: "10 koin · Kartu Kredit",
    date: "2026-10-10T14:00:00+07:00",
    amount: 10,
  },
  {
    id: "txn_rc_003",
    type: "debit",
    category: "post_job",
    description: "Pasang lowongan",
    detail: "Product Designer · Nusa Studio",
    date: "2026-10-11T09:00:00+07:00",
    amount: 3,
  },
  {
    id: "txn_rc_004",
    type: "debit",
    category: "post_job",
    description: "Pasang lowongan",
    detail: "UX Researcher · Nusa Studio",
    date: "2026-10-15T11:30:00+07:00",
    amount: 3,
  },
  {
    id: "txn_rc_005",
    type: "credit",
    category: "topup",
    description: "Pembelian koin",
    detail: "5 koin · Transfer Bank",
    date: "2026-10-20T10:00:00+07:00",
    amount: 5,
  },
  {
    id: "txn_rc_006",
    type: "debit",
    category: "post_job",
    description: "Pasang lowongan",
    detail: "Brand Designer · Nusa Studio",
    date: "2026-10-22T08:00:00+07:00",
    amount: 3,
  },
  {
    id: "txn_rc_007",
    type: "credit",
    category: "refund",
    description: "Pengembalian koin",
    detail: "Lowongan dibatalkan · UX Researcher",
    date: "2026-10-23T15:00:00+07:00",
    amount: 3,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}
