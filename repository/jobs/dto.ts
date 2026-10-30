import { BaseResponse } from "@/repository/common/dto";

export interface DTOJobCategoryResponses {
  id: string;
  name: string;
}

export interface Sector {
  id: string;
  sector_name: string;
}

export interface DTOJobRequest {
  position: string;
  job_category_id: string;
  employment: string;
  workplace: string;
  location: string;
  jobdesc: string;
  salary_desc?: string;
  slot: number;
  extend_coins?: number;
  essay_questions?: string[];
}

export interface DTOUpdateJobRequest {
  position: string;
  job_category_id: string;
  employment: string;
  workplace: string;
  location: string;
  jobdesc: string;
  salary_desc?: string;
  slot: number;
  extend_coins?: number;
  image_url?: string;
  essay_questions?: string[];
}

export interface DTOJobsResponses {
  id: string;
  company_id: string;
  job_category_id: string;
  position: string;
  employment: string;
  workplace: string;
  location: string;
  jobdesc: string;
  salary_desc: string;
  slot: number;
  filled_slot: number;
  coin_applyment: number;
  status: string;
  closing_date: string;
  created_at: string;
  updated_at: string;
}

export interface DTOJobSearchResponses {
  id: string;
  company_name: string;
  position: string;
  employment: string;
  workplace: string;
  location: string;
  salary_desc: string;
  slot: number;
  filled_slot: number;
  coin_applyment: number;
  status: string;
  closing_date: string;
}

export interface SearchJobsParams {
  q?: string;
}
