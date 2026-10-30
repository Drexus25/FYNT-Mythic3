import JobApplicationContainer from "@/components/job/apply/container/JobApplicationContainer";
import { DUMMY_JOBS } from "@/components/find/data/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = DUMMY_JOBS.find((j) => j.slug === slug);

  if (!job) {
    return { title: "Formulir Lamaran · FYNT" };
  }

  return {
    title: `Lamar ${job.title} – ${job.company} · FYNT`,
    description: `Formulir pendaftaran untuk lowongan ${job.title} di ${job.company}.`,
  };
}

export default async function JobApplyFormPage({ params }: Props) {
  const { slug } = await params;
  return <JobApplicationContainer slug={slug} />;
}