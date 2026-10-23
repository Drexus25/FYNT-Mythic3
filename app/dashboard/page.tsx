"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, logoutUser, User, DUMMY_USERS } from "@/data/users";

export default function SeekerDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const current = getCurrentUser();
    if (current && current.role === "seeker") {
      setUser(current);
    } else if (current && current.role === "recruiter") {
      // Jika ternyata recruiter yang masuk ke /dashboard, redirect ke recruiter dashboard
      router.replace("/recruiter/dashboard");
    } else {
      // Default fallback ke seeker dummy jika dibuka langsung
      const defaultSeeker = DUMMY_USERS.find((u) => u.role === "seeker") || null;
      setUser(defaultSeeker);
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  const applications = [
    {
      id: 1,
      role: "Product Designer",
      company: "Nusa Studio",
      location: "Jakarta Selatan (Hybrid)",
      salary: "Rp8–12 juta / bulan",
      appliedAt: "18 Oktober 2026",
      status: "Dalam Review",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200",
      coinsUsed: 1,
    },
    {
      id: 2,
      role: "UI/UX Designer",
      company: "TechNusantara",
      location: "Jakarta Pusat (Remote)",
      salary: "Rp10–15 juta / bulan",
      appliedAt: "15 Oktober 2026",
      status: "Wawancara",
      statusColor: "bg-teal/10 text-teal border-teal/20",
      coinsUsed: 1,
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Kreatif Solusi",
      location: "Bandung (On-site)",
      salary: "Rp7–10 juta / bulan",
      appliedAt: "12 Oktober 2026",
      status: "Terkirim",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      coinsUsed: 1,
    },
  ];

  return (
    <>

    </>
  );
}
