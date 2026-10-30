import { BaseResponse } from "@/repository/common/dto";

export type ApiResponse<T = unknown> = BaseResponse<T>;

export interface DataLogin {
  profile?: unknown;
  [key: string]: unknown;
}

export interface DTOLoginResponse {
  access_token: string;
  role: string;
  data?: DataLogin;
}

export interface DTORefreshResponse {
  access_token: string;
}

export interface DTOLoginRequest {
  email: string;
  password: string;
  remember_me?: boolean;
}

export interface DTOApplicantRegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  verify_password: string;
  phone_number: string;
  callback_url?: string;
}

export interface DTOCompanyRegisterRequest {
  company_name: string;
  owner_name: string;
  email: string;
  password: string;
  verify_password: string;
  phone_number: string;
  sector: string;
  address: string;
  domicile: string;
  web_url?: string;
  callback_url?: string;
}

export interface DTOExchangeCodeRequest {
  code: string;
}

export interface GoogleCallbackParams {
  code: string;
  state: string;
}

export interface GoogleLoginParams {
  role: "seeker" | "recruiter" | string;
}
