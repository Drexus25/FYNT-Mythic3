import { BaseResponse } from "@/repository/common/dto";

export interface DTOApplicantProfileResponse {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  birth_date: string;
  domicile: string;
  about: string;
  web_portfolio_url: string;
  avatar_url: string;
}

export interface UpdateApplicantProfileFormData {
  first_name?: string;
  last_name?: string;
  gender?: string;
  birth_date?: string;
  domicile?: string;
  about?: string;
  web_portfolio_url?: string;
  avatar?: File;
}

export interface DTODocumentResponse {
  id: string;
  file_name: string;
  file_url: string;
  documents_type: string;
  is_active: boolean;
  created_at: string;
}

export interface DTOSetActiveDocumentRequest {
  documents_type: string;
}

export interface UploadDocumentFormData {
  documents_type: "cv" | "portfolio";
  file: File;
}

export interface Education {
  id: string;
  applicant_id: string;
  institution: string;
  degree: string;
  field_of_study: string;
  periode: string;
  created_at: string;
}

export interface DTOEducationRequest {
  institution: string;
  degree: string;
  field_of_study: string;
  periode: string;
}

export interface DTOUpdateEducationRequest {
  institution: string;
  degree: string;
  field_of_study: string;
  periode: string;
}

export interface Experience {
  id: string;
  applicant_id: string;
  company_name: string;
  position: string;
  periode: string;
  jobdesc: string;
  created_at: string;
}

export interface DTOExperienceRequest {
  company_name: string;
  position: string;
  periode: string;
  jobdesc: string;
}

export interface DTOUpdateExperienceRequest {
  company_name: string;
  position: string;
  periode: string;
  jobdesc: string;
}
