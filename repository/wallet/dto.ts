import { BaseResponse } from "@/repository/common/dto";

export interface DTOBalanceResponse {
  balance: number;
}

export interface DTOTopUpRequest {
  account_id: string;
  amount: number;
}

export interface DTOTopUpResponse {
  order_id: string;
  amount: number;
  snap_token: string;
  snap_url: string;
}
