import type { Metadata } from "next";
import CompanyProfileContainer from "@/components/company/container/CompanyProfileContainer";

export const metadata: Metadata = {
  title: "Profil Perusahaan | FYNT",
  description:
    "Perbarui identitas dan cerita perusahaan agar talenta mengenal Anda lebih dekat di FYNT.",
};

export default function CompanyProfilePage() {
  return <CompanyProfileContainer />;
}

