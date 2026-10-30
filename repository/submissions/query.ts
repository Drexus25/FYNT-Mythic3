"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
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
import {
  applyJobAction,
  getSeekerSubmissionsAction,
  getSeekerSubmissionDetailAction,
  updateSubmissionNotesAction,
  updateSubmissionStatusAction,
  getSubmissionsByJobAction,
} from "./actions";

export const submissionKeys = {
  all: ["submissions"] as const,
  seekerList: (params?: SeekerSubmissionsParams) => [...submissionKeys.all, "seeker", params] as const,
  seekerDetail: (id: string) => [...submissionKeys.all, "seeker-detail", id] as const,
  byJob: (jobId: string, params?: RecruiterSubmissionsParams) => [...submissionKeys.all, "by-job", jobId, params] as const,
};

export function useApplyJobMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { jobId: string; payload: ApplyJobRequest }>
) {
  return useMutation({
    mutationFn: ({ jobId, payload }) => applyJobAction(jobId, payload),
    ...options,
  });
}

export function useSeekerSubmissionsQuery(
  params?: SeekerSubmissionsParams,
  options?: Omit<UseQueryOptions<BaseResponse<DTOSeekerSubmissionResponse[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: submissionKeys.seekerList(params),
    queryFn: () => getSeekerSubmissionsAction(params),
    ...options,
  });
}

export function useSeekerSubmissionDetailQuery(
  id: string,
  options?: Omit<UseQueryOptions<BaseResponse<DTOSeekerSubmissionDetail>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: submissionKeys.seekerDetail(id),
    queryFn: () => getSeekerSubmissionDetailAction(id),
    enabled: Boolean(id),
    ...options,
  });
}

export function useUpdateSubmissionNotesMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOUpdateNotesRequest }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => updateSubmissionNotesAction(id, payload),
    ...options,
  });
}

export function useUpdateSubmissionStatusMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOUpdateStatusRequest }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => updateSubmissionStatusAction(id, payload),
    ...options,
  });
}

export function useSubmissionsByJobQuery(
  jobId: string,
  params?: RecruiterSubmissionsParams,
  options?: Omit<UseQueryOptions<BaseResponse<DTORecruiterSubmissionList[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: submissionKeys.byJob(jobId, params),
    queryFn: () => getSubmissionsByJobAction(jobId, params),
    enabled: Boolean(jobId),
    ...options,
  });
}

// Aliases
export const useApplyJob = useApplyJobMutation;
export const useSeekerSubmissions = useSeekerSubmissionsQuery;
export const useSeekerSubmissionDetail = useSeekerSubmissionDetailQuery;
export const useUpdateSubmissionNotes = useUpdateSubmissionNotesMutation;
export const useUpdateSubmissionStatus = useUpdateSubmissionStatusMutation;
export const useSubmissionsByJob = useSubmissionsByJobQuery;
