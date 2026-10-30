"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import { Questions, DTOUpdateQuestion, GetQuestionsParams } from "./dto";
import {
  getQuestionsAction,
  updateQuestionAction,
  deleteQuestionAction,
} from "./actions";

export const questionKeys = {
  all: ["questions"] as const,
  byJob: (params: GetQuestionsParams) => [...questionKeys.all, "by-job", params] as const,
};

export function useQuestionsQuery(
  params: GetQuestionsParams,
  options?: Omit<UseQueryOptions<BaseResponse<Questions[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: questionKeys.byJob(params),
    queryFn: () => getQuestionsAction(params),
    enabled: Boolean(params.job_id),
    ...options,
  });
}

export function useUpdateQuestionMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOUpdateQuestion }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => updateQuestionAction(id, payload),
    ...options,
  });
}

export function useDeleteQuestionMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, string>
) {
  return useMutation({
    mutationFn: (id) => deleteQuestionAction(id),
    ...options,
  });
}

// Aliases
export const useQuestions = useQuestionsQuery;
export const useUpdateQuestion = useUpdateQuestionMutation;
export const useDeleteQuestion = useDeleteQuestionMutation;
