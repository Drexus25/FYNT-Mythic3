import { JobCardProps } from "@/components/shared/JobCard";

export interface JobItem extends JobCardProps {
  id: number;
  logo: string;
  logoColor: string;
  company: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  slotsfilled: number;
  slotsTotal: number;
  coinCost: number;
  closingDate: string;
  // Additional metadata for search/filtering if needed
  workplaceType?: "Hybrid" | "Remote" | "On-site";
  isVerified?: boolean;
  tags?: string[];
  postedAt?: string;
}

export const DUMMY_JOBS: JobItem[] = [
  {
    id: 1,
    logo: "N",
    logoColor: "bg-teal",
    company: "Nusa Studio",
    isVerified: true,
    title: "Product Designer",
    location: "Jakarta Selatan",
    workplaceType: "Hybrid",
    type: "Hybrid",
    salary: "Rp8–12 juta / bulan",
    tags: ["Full-time", "Mid level", "Figma"],
    slotsfilled: 8,
    slotsTotal: 10,
    coinCost: 1,
    closingDate: "28 Okt 2026",
    postedAt: "2 hari lalu",
  },
  {
    id: 2,
    logo: "A",
    logoColor: "bg-teal",
    company: "Akar Digital",
    isVerified: true,
    title: "Frontend Developer",
    location: "Bandung",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp9–14 juta / bulan",
    tags: ["Full-time", "Mid level", "React"],
    slotsfilled: 14,
    slotsTotal: 20,
    coinCost: 2,
    closingDate: "30 Okt 2026",
    postedAt: "3 hari lalu",
  },
  {
    id: 3,
    logo: "S",
    logoColor: "bg-teal",
    company: "Sela Kreatif",
    isVerified: true,
    title: "Digital Marketing Specialist",
    location: "Yogyakarta",
    workplaceType: "On-site",
    type: "On-site",
    salary: "Rp5–8 juta / bulan",
    tags: ["Full-time", "Junior", "SEO"],
    slotsfilled: 5,
    slotsTotal: 8,
    coinCost: 1,
    closingDate: "25 Okt 2026",
    postedAt: "1 hari lalu",
  },
  {
    id: 4,
    logo: "T",
    logoColor: "bg-teal",
    company: "Titik Data",
    isVerified: true,
    title: "Data Analyst",
    location: "Jakarta Pusat",
    workplaceType: "Hybrid",
    type: "Hybrid",
    salary: "Rp7–11 juta / bulan",
    tags: ["Full-time", "Mid level", "SQL"],
    slotsfilled: 9,
    slotsTotal: 15,
    coinCost: 2,
    closingDate: "29 Okt 2026",
    postedAt: "4 hari lalu",
  },
  {
    id: 5,
    logo: "R",
    logoColor: "bg-teal",
    company: "Ruang Cerita",
    isVerified: false,
    title: "Content Writer",
    location: "Surabaya",
    workplaceType: "Remote",
    type: "Remote",
    salary: "Rp4–6 juta / bulan",
    tags: ["Kontrak", "Junior", "Writing"],
    slotsfilled: 4,
    slotsTotal: 6,
    coinCost: 1,
    closingDate: "24 Okt 2026",
    postedAt: "5 hari lalu",
  },
  {
    id: 6,
    logo: "L",
    logoColor: "bg-teal",
    company: "Langkah Bersama",
    isVerified: true,
    title: "People Operations",
    location: "Tangerang",
    workplaceType: "On-site",
    type: "On-site",
    salary: "Rp6–9 juta / bulan",
    tags: ["Full-time", "Mid level", "HR"],
    slotsfilled: 3,
    slotsTotal: 5,
    coinCost: 1,
    closingDate: "31 Okt 2026",
    postedAt: "6 hari lalu",
  },
];
