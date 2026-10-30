"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import {
  DTOLoginRequest,
  DTOLoginResponse,
  DTOApplicantRegisterRequest,
  DTOCompanyRegisterRequest,
  DTOExchangeCodeRequest,
  DTORefreshResponse,
  GoogleCallbackParams,
  GoogleLoginParams,
} from "./dto";
import {
  loginAction,
  registerSeekerAction,
  registerRecruiterAction,
  logoutAction,
  refreshTokenAction,
  exchangeOAuthCodeAction,
  getGoogleLoginUrlAction,
  googleOAuthCallbackAction,
} from "./actions";

export const authKeys = {
  all: ["auth"] as const,
  googleLogin: (params: GoogleLoginParams) => [...authKeys.all, "google-login", params] as const,
  googleCallback: (params: GoogleCallbackParams) => [...authKeys.all, "google-callback", params] as const,
};

export function useLoginMutation(
  options?: UseMutationOptions<BaseResponse<DTOLoginResponse>, Error, DTOLoginRequest>
) {
  return useMutation({
    mutationFn: (payload) => loginAction(payload),
    ...options,
  });
}

export function useRegisterSeekerMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOApplicantRegisterRequest>
) {
  return useMutation({
    mutationFn: (payload) => registerSeekerAction(payload),
    ...options,
  });
}

export function useRegisterRecruiterMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOCompanyRegisterRequest>
) {
  return useMutation({
    mutationFn: (payload) => registerRecruiterAction(payload),
    ...options,
  });
}

export function useLogoutMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, void>
) {
  return useMutation({
    mutationFn: () => logoutAction(),
    ...options,
  });
}

export function useRefreshTokenMutation(
  options?: UseMutationOptions<BaseResponse<DTORefreshResponse>, Error, void>
) {
  return useMutation({
    mutationFn: () => refreshTokenAction(),
    ...options,
  });
}

export function useExchangeOAuthCodeMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOExchangeCodeRequest>
) {
  return useMutation({
    mutationFn: (payload) => exchangeOAuthCodeAction(payload),
    ...options,
  });
}

export function useGoogleLoginUrlQuery(
  params: GoogleLoginParams,
  options?: Omit<UseQueryOptions<string, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: authKeys.googleLogin(params),
    queryFn: () => getGoogleLoginUrlAction(params),
    enabled: Boolean(params.role),
    ...options,
  });
}

export function useGoogleOAuthCallbackQuery(
  params: GoogleCallbackParams,
  options?: Omit<UseQueryOptions<BaseResponse<DTOLoginResponse>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: authKeys.googleCallback(params),
    queryFn: () => googleOAuthCallbackAction(params),
    enabled: Boolean(params.code && params.state),
    ...options,
  });
}

// Ergonomic Aliases
export const useLogin = useLoginMutation;
export const useRegisterSeeker = useRegisterSeekerMutation;
export const useRegisterRecruiter = useRegisterRecruiterMutation;
export const useLogout = useLogoutMutation;
export const useRefreshToken = useRefreshTokenMutation;
export const useExchangeOAuthCode = useExchangeOAuthCodeMutation;
export const useGoogleLoginUrl = useGoogleLoginUrlQuery;
export const useGoogleOAuthCallback = useGoogleOAuthCallbackQuery;
