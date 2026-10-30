import { BaseResponse } from "@/repository/common/dto";

export interface EssayAnswerRequest {
  question_id: string;
  answer: string;
}

export interface DTOSubmissionFile {
  file_name: string;
  file_size_bytes: number;
  file_type: string;
  file_url: string;
}

export interface ApplyJobRequest {
  job_id: string;
  web_portfolio_url?: string;
  answers?: EssayAnswerRequest[];
  files?: DTOSubmissionFile[];
}

export interface DTOSeekerSubmissionResponse {
  id: string;
  company_name: string;
  position: string;
  location: string;
  workplace: string;
  status: string;
  applied_at: string;
}

export interface DTOSeekerSubmissionDetail {
  status: string;
  applied_at: string;
  cv_doc_name: string;
  cv_doc_url: string;
  portfolio_doc_name: string;
  portfolio_doc_url: string;
  portfolio_link_web: string;
}

export interface DTOEssayAnswer {
  question: string;
  answer: string;
}

export interface DTORecruiterSubmissionList {
  submission_id: string;
  applicant_name: string;
  applicant_email: string;
  applicant_phone: string;
  status: string;
  applied_at: string;
  internal_notes: string;
  cv_doc_url: string;
  portfolio_doc_url: string;
  portfolio_link_web: string;
  answers?: DTOEssayAnswer[];
}

export interface DTOUpdateNotesRequest {
  internal_notes: string;
}

export interface DTOUpdateStatusRequest {
  status: string;
}

export interface SeekerSubmissionsParams {
  status?: string;
  q?: string;
}

export interface RecruiterSubmissionsParams {
  status?: string;
}
