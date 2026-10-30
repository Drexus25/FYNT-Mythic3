import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import {
  DTOJobCategoryResponses,
  DTOJobsResponses,
  DTOJobSearchResponses,
  DTOJobRequest,
  DTOUpdateJobRequest,
  Sector,
  SearchJobsParams,
} from "./dto";

export async function getJobCategoriesAction(): Promise<BaseResponse<DTOJobCategoryResponses[]>> {
  try {
    const res = await api.get<BaseResponse<DTOJobCategoryResponses[]>>("/categories");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getSectorsAction(): Promise<BaseResponse<Sector[]>> {
  try {
    const res = await api.get<BaseResponse<Sector[]>>("/sectors");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getJobsAction(): Promise<BaseResponse<DTOJobsResponses[]>> {
  try {
    const res = await api.get<BaseResponse<DTOJobsResponses[]>>("/jobs");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function searchJobsAction(
  params?: SearchJobsParams
): Promise<BaseResponse<DTOJobSearchResponses[]>> {
  try {
    const res = await api.get<BaseResponse<DTOJobSearchResponses[]>>("/job/search", {
      params,
    });
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getJobByIdAction(id: string): Promise<BaseResponse<DTOJobsResponses>> {
  try {
    const res = await api.get<BaseResponse<DTOJobsResponses>>(`/job/${id}`);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function createJobAction(payload: DTOJobRequest): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>("/job", payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateJobAction(
  id: string,
  payload: DTOUpdateJobRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(`/job/${id}`, payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
