"use client";

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
import { UploadResponseData } from "./dto";
import { uploadDocumentAction, uploadPictureAction } from "./actions";

export function useUploadDocumentMutation(
  options?: UseMutationOptions<BaseResponse<UploadResponseData>, Error, File>
) {
  return useMutation({
    mutationFn: (file) => uploadDocumentAction(file),
    ...options,
  });
}

export function useUploadPictureMutation(
  options?: UseMutationOptions<BaseResponse<UploadResponseData>, Error, File>
) {
  return useMutation({
    mutationFn: (file) => uploadPictureAction(file),
    ...options,
  });
}

// Aliases
export const useUploadDocument = useUploadDocumentMutation;
export const useUploadPicture = useUploadPictureMutation;
