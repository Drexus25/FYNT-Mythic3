import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import { UploadResponseData } from "./dto";

export async function uploadDocumentAction(
  file: File
): Promise<BaseResponse<UploadResponseData>> {
  try {
    const formData = new FormData();
    formData.append("document", file);

    const res = await api.post<BaseResponse<UploadResponseData>>(
      "/upload/document",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function uploadPictureAction(
  file: File
): Promise<BaseResponse<UploadResponseData>> {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await api.post<BaseResponse<UploadResponseData>>(
      "/upload/picture",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
