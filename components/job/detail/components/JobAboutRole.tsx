"use client";

import JobDescription from "./JobDescription";

interface JobAboutRoleProps {
  content: string;
}

/**
 * @deprecated Merged into JobDescription. Use `JobDescription` instead.
 */
export default function JobAboutRole({ content }: JobAboutRoleProps) {
  return <JobDescription content={content} title="Deskripsi Pekerjaan" />;
}

