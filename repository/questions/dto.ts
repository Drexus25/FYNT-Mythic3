import { BaseResponse } from "@/repository/common/dto";

export interface Questions {
  id: string;
  job_id: string;
  questions_detail: string;
}

export interface DTOUpdateQuestion {
  questions_detail: string;
}

export interface GetQuestionsParams {
  job_id: string;
}
