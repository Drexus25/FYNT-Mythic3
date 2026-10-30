"use client";

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import { DTOMidtransNotification } from "./dto";
import { midtransNotificationAction } from "./actions";

export function useMidtransNotificationMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOMidtransNotification>
) {
  return useMutation({
    mutationFn: (payload) => midtransNotificationAction(payload),
    ...options,
  });
}

export const useMidtransNotification = useMidtransNotificationMutation;
