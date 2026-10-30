import { AxiosError } from "axios";
import { ApiErrorResponse } from "./dto";

export function handleApiError(error: unknown): never {
  if (error instanceof AxiosError) {
    const errorData = error.response?.data as ApiErrorResponse | undefined;
    const message =
      errorData?.message ||
      error.message ||
      "Terjadi kesalahan pada server.";
    throw new Error(message);
  }
  if (error instanceof Error) {
    throw error;
  }
  throw new Error("Terjadi kesalahan yang tidak diketahui.");
}
