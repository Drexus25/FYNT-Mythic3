export interface UserDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  updatedAt?: string;
  url?: string;
}

export interface UserProfileData {
  fullName: string;
  email: string;
  phone: string;
  domicile: string;
  coins: number;
  cvFiles: UserDocument[];
  portfolioUrl: string;
  portfolioFiles: UserDocument[];
}

export const INITIAL_USER_PROFILE: UserProfileData = {
  fullName: "Ayu Prameswari",
  email: "ayu.prameswari@email.com",
  phone: "0812 3456 7890",
  domicile: "Jakarta Selatan",
  coins: 2,
  cvFiles: [
    {
      id: "cv-1",
      name: "CV_Ayu_Prameswari.pdf",
      size: "1,2 MB",
      type: "PDF",
      updatedAt: "12 Oktober 2026",
      url: "#",
    },
  ],
  portfolioUrl: "ayu.design.example",
  portfolioFiles: [
    {
      id: "port-1",
      name: "Portfolio_Ayu_2026.pdf",
      size: "3,8 MB",
      type: "PDF",
      url: "#",
    },
  ],
};
