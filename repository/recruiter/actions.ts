import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import { DTOJobSummaryResponses, DTOCompanyRegisterRequest } from "./dto";

export async function getRecruiterStatsAction(): Promise<BaseResponse<DTOJobSummaryResponses>> {
  try {
    const res = await api.get<BaseResponse<DTOJobSummaryResponses>>(
      "/recruiter/dashboard/stats"
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function createCompanyOnboardingAction(
  payload: DTOCompanyRegisterRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>(
      "/recruiter/on-boarding",
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateCompanyProfileAction(
  payload: DTOCompanyRegisterRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(
      "/recruiter/profile",
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
