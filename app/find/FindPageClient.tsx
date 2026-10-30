"use client";

import { useSearchParams } from "next/navigation";
import FindContainer from "@/components/find/container/FindContainer";

export default function FindPageClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || searchParams.get("search") || "";

  return <FindContainer key={q} initialQuery={q} />;
}
