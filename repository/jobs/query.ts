"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import {
  DTOJobCategoryResponses,
  DTOJobsResponses,
  DTOJobSearchResponses,
  DTOJobRequest,
  DTOUpdateJobRequest,
  Sector,
  SearchJobsParams,
} from "./dto";
import {
  getJobCategoriesAction,
  getSectorsAction,
  getJobsAction,
  searchJobsAction,
  getJobByIdAction,
  createJobAction,
  updateJobAction,
} from "./actions";

export const jobKeys = {
  all: ["jobs"] as const,
  categories: () => [...jobKeys.all, "categories"] as const,
  sectors: () => [...jobKeys.all, "sectors"] as const,
  list: () => [...jobKeys.all, "list"] as const,
  search: (params?: SearchJobsParams) => [...jobKeys.all, "search", params] as const,
  detail: (id: string) => [...jobKeys.all, "detail", id] as const,
};

export function useJobCategoriesQuery(
  options?: Omit<UseQueryOptions<BaseResponse<DTOJobCategoryResponses[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: jobKeys.categories(),
    queryFn: () => getJobCategoriesAction(),
    ...options,
  });
}

export function useSectorsQuery(
  options?: Omit<UseQueryOptions<BaseResponse<Sector[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: jobKeys.sectors(),
    queryFn: () => getSectorsAction(),
    ...options,
  });
}

export function useJobsQuery(
  options?: Omit<UseQueryOptions<BaseResponse<DTOJobsResponses[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: jobKeys.list(),
    queryFn: () => getJobsAction(),
    ...options,
  });
}

export function useSearchJobsQuery(
  params?: SearchJobsParams,
  options?: Omit<UseQueryOptions<BaseResponse<DTOJobSearchResponses[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: jobKeys.search(params),
    queryFn: () => searchJobsAction(params),
    ...options,
  });
}

export function useJobByIdQuery(
  id: string,
  options?: Omit<UseQueryOptions<BaseResponse<DTOJobsResponses>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: jobKeys.detail(id),
    queryFn: () => getJobByIdAction(id),
    enabled: Boolean(id),
    ...options,
  });
}

export function useCreateJobMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOJobRequest>
) {
  return useMutation({
    mutationFn: (payload) => createJobAction(payload),
    ...options,
  });
}

export function useUpdateJobMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOUpdateJobRequest }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => updateJobAction(id, payload),
    ...options,
  });
}

// Aliases
export const useJobCategories = useJobCategoriesQuery;
export const useSectors = useSectorsQuery;
export const useJobs = useJobsQuery;
export const useSearchJobs = useSearchJobsQuery;
export const useJobDetail = useJobByIdQuery;
export const useCreateJob = useCreateJobMutation;
export const useUpdateJob = useUpdateJobMutation;
