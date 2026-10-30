import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
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

export async function loginAction(
  payload: DTOLoginRequest
): Promise<BaseResponse<DTOLoginResponse>> {
  try {
    const res = await api.post<BaseResponse<DTOLoginResponse>>(
      "/auth/login",
      payload
    );

    if (typeof window !== "undefined" && res.data?.data?.access_token) {
      localStorage.setItem("fynt_access_token", res.data.data.access_token);
      localStorage.setItem("fynt_role", res.data.data.role);
      window.dispatchEvent(new Event("fynt_auth_change"));
    }

    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function registerSeekerAction(
  payload: DTOApplicantRegisterRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>(
      "/auth/register/seeker",
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function registerRecruiterAction(
  payload: DTOCompanyRegisterRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>(
      "/auth/register/recruiter",
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function logoutAction(): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>("/auth/logout");
    if (typeof window !== "undefined") {
      localStorage.removeItem("fynt_access_token");
      localStorage.removeItem("fynt_refresh_token");
      localStorage.removeItem("fynt_role");
      localStorage.removeItem("fynt_auth_user");
      window.dispatchEvent(new Event("fynt_auth_change"));
    }
    return res.data;
  } catch (err) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("fynt_access_token");
      localStorage.removeItem("fynt_refresh_token");
      localStorage.removeItem("fynt_role");
      localStorage.removeItem("fynt_auth_user");
      window.dispatchEvent(new Event("fynt_auth_change"));
    }
    return handleApiError(err);
  }
}

export async function refreshTokenAction(): Promise<BaseResponse<DTORefreshResponse>> {
  try {
    const res = await api.post<BaseResponse<DTORefreshResponse>>("/refresh-token");
    if (typeof window !== "undefined" && res.data?.data?.access_token) {
      localStorage.setItem("fynt_access_token", res.data.data.access_token);
    }
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function exchangeOAuthCodeAction(
  payload: DTOExchangeCodeRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>("/auth/exchange", payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function getGoogleLoginUrlAction(
  params: GoogleLoginParams
): Promise<string> {
  try {
    const res = await api.get<string>("/auth/google/login", { params });
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function googleOAuthCallbackAction(
  params: GoogleCallbackParams
): Promise<BaseResponse<DTOLoginResponse>> {
  try {
    const res = await api.get<BaseResponse<DTOLoginResponse>>(
      "/auth/google/callback",
      { params }
    );
    if (typeof window !== "undefined" && res.data?.data?.access_token) {
      localStorage.setItem("fynt_access_token", res.data.data.access_token);
      localStorage.setItem("fynt_role", res.data.data.role);
      window.dispatchEvent(new Event("fynt_auth_change"));
    }
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
