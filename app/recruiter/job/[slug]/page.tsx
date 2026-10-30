import ApplicantsListContainer from "@/components/applicants-data/container/ApplicantsListContainer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Pelamar – ${slug} · FYNT`,
    description: `Kelola dan tinjau pelamar untuk lowongan ${slug} di FYNT.`,
  };
}

export default async function JobApplicantsPage({ params }: Props) {
  const { slug } = await params;
  return <ApplicantsListContainer slug={slug} />;
}