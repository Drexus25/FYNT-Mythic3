"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import { DTOBalanceResponse, DTOTopUpRequest, DTOTopUpResponse } from "./dto";
import { getWalletBalanceAction, topUpWalletAction } from "./actions";

export const walletKeys = {
  all: ["wallet"] as const,
  balance: () => [...walletKeys.all, "balance"] as const,
};

export function useWalletBalanceQuery(
  options?: Omit<UseQueryOptions<BaseResponse<DTOBalanceResponse>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: walletKeys.balance(),
    queryFn: () => getWalletBalanceAction(),
    ...options,
  });
}

export function useTopUpWalletMutation(
  options?: UseMutationOptions<BaseResponse<DTOTopUpResponse>, Error, DTOTopUpRequest>
) {
  return useMutation({
    mutationFn: (payload) => topUpWalletAction(payload),
    ...options,
  });
}

// Aliases
export const useWalletBalance = useWalletBalanceQuery;
export const useTopUpWallet = useTopUpWalletMutation;
