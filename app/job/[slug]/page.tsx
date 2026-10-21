import JobDetailContainer from "@/components/job/container/JobDetailContainer";
import { DUMMY_JOBS } from "@/components/find/data/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = DUMMY_JOBS.find((j) => j.slug === slug);

  if (!job) {
    return { title: "Lowongan tidak ditemukan · FYNT" };
  }

  return {
    title: `${job.title} – ${job.company} · FYNT`,
    description: `Lamar sebagai ${job.title} di ${job.company}. ${job.location} · ${job.workplaceType} · ${job.salary}.`,
  };
}

export function generateStaticParams() {
  return DUMMY_JOBS.map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  return <JobDetailContainer slug={slug} />;
}
