import { BaseResponse } from "@/repository/common/dto";

export interface DTOJobSummaryResponses {
  all_jobs: number;
  active_jobs: number;
  close_jobs: number;
  total_submissions: number;
  submissions_in_review: number;
  submissions_in_active_job: number;
}

export interface DTOCompanyRegisterRequest {
  company_name: string;
  owner_name: string;
  password?: string;
  verify_password?: string;
  phone_number: string;
  sector: string;
  address: string;
  domicile: string;
  web_url?: string;
  callback_url?: string;
}
