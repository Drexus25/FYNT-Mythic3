export interface CompanyProfile {
  companyName: string;
  domicile: string;
  ownerName: string;
  website: string;
  address: string;
  description: string;
  logo: string;
}

export const INITIAL_COMPANY_PROFILE: CompanyProfile = {
  companyName: "Nusa Studio",
  domicile: "Bandung, Indonesia",
  ownerName: "Aditya Pratama",
  website: "https://nusastudio.example",
  address:
    "Jl. Cimanuk No. 18, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115",
  description:
    "Nusa Studio adalah studio kreatif di Bandung yang membantu bisnis membangun identitas merek dan pengalaman digital yang bermakna. Kami menggabungkan strategi, desain, dan kolaborasi untuk menghadirkan solusi yang relevan bagi setiap klien.",
  logo: "",
};

