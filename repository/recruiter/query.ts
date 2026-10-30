"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import { DTOJobSummaryResponses, DTOCompanyRegisterRequest } from "./dto";
import {
  getRecruiterStatsAction,
  createCompanyOnboardingAction,
  updateCompanyProfileAction,
} from "./actions";

export const recruiterKeys = {
  all: ["recruiter"] as const,
  stats: () => [...recruiterKeys.all, "stats"] as const,
};

export function useRecruiterStatsQuery(
  options?: Omit<UseQueryOptions<BaseResponse<DTOJobSummaryResponses>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: recruiterKeys.stats(),
    queryFn: () => getRecruiterStatsAction(),
    ...options,
  });
}

export function useCreateCompanyOnboardingMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOCompanyRegisterRequest>
) {
  return useMutation({
    mutationFn: (payload) => createCompanyOnboardingAction(payload),
    ...options,
  });
}

export function useUpdateCompanyProfileMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOCompanyRegisterRequest>
) {
  return useMutation({
    mutationFn: (payload) => updateCompanyProfileAction(payload),
    ...options,
  });
}

// Aliases
export const useRecruiterStats = useRecruiterStatsQuery;
export const useCreateCompanyOnboarding = useCreateCompanyOnboardingMutation;
export const useUpdateCompanyProfile = useUpdateCompanyProfileMutation;
