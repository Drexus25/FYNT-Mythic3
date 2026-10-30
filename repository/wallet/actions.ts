import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import { DTOBalanceResponse, DTOTopUpRequest, DTOTopUpResponse } from "./dto";

export async function getWalletBalanceAction(): Promise<BaseResponse<DTOBalanceResponse>> {
  try {
    const res = await api.get<BaseResponse<DTOBalanceResponse>>("/wallet/balance");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function topUpWalletAction(
  payload: DTOTopUpRequest
): Promise<BaseResponse<DTOTopUpResponse>> {
  try {
    const res = await api.post<BaseResponse<DTOTopUpResponse>>("/wallet/top-up", payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
