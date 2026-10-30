export interface BaseResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success?: boolean;
  message: string;
  data?: unknown;
  errors?: Record<string, string[] | string>;
}
