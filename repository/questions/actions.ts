import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import { Questions, DTOUpdateQuestion, GetQuestionsParams } from "./dto";

export async function getQuestionsAction(
  params: GetQuestionsParams
): Promise<BaseResponse<Questions[]>> {
  try {
    const res = await api.get<BaseResponse<Questions[]>>("/questions", {
      params,
    });
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateQuestionAction(
  id: string,
  payload: DTOUpdateQuestion
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.put<BaseResponse<unknown>>(`/questions/${id}`, payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function deleteQuestionAction(id: string): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.delete<BaseResponse<unknown>>(`/questions/${id}`);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
