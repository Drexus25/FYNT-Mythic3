import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import { DTOMidtransNotification } from "./dto";

export async function midtransNotificationAction(
  payload: DTOMidtransNotification
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>(
      "/transaction/notification",
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
