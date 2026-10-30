import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import {
  ApplyJobRequest,
  DTOSeekerSubmissionResponse,
  DTOSeekerSubmissionDetail,
  DTORecruiterSubmissionList,
  DTOUpdateNotesRequest,
  DTOUpdateStatusRequest,
  SeekerSubmissionsParams,
  RecruiterSubmissionsParams,
} from "./dto";

export async function applyJobAction(
  jobId: string,
  payload: ApplyJobRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>(`/job/${jobId}/apply`, payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getSeekerSubmissionsAction(
  params?: SeekerSubmissionsParams
): Promise<BaseResponse<DTOSeekerSubmissionResponse[]>> {
  try {
    const res = await api.get<BaseResponse<DTOSeekerSubmissionResponse[]>>(
      "/seeker/submissions",
      { params }
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getSeekerSubmissionDetailAction(
  id: string
): Promise<BaseResponse<DTOSeekerSubmissionDetail>> {
  try {
    const res = await api.get<BaseResponse<DTOSeekerSubmissionDetail>>(
      `/seeker/submissions/${id}`
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateSubmissionNotesAction(
  id: string,
  payload: DTOUpdateNotesRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(
      `/submissions/${id}/notes`,
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateSubmissionStatusAction(
  id: string,
  payload: DTOUpdateStatusRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(
      `/submissions/${id}/status`,
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getSubmissionsByJobAction(
  jobId: string,
  params?: RecruiterSubmissionsParams
): Promise<BaseResponse<DTORecruiterSubmissionList[]>> {
  try {
    const res = await api.get<BaseResponse<DTORecruiterSubmissionList[]>>(
      `/submissions/job/${jobId}`,
      { params }
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
