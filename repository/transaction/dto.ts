import { BaseResponse } from "@/repository/common/dto";

export interface DTOMidtransNotification {
  order_id: string;
  transaction_status: string;
  payment_type: string;
  gross_amount: string;
  fraud_status: string;
}
