import api from "@/lib/axios";
import { BaseResponse } from "@/repository/common/dto";
import { handleApiError } from "@/repository/common/util";
import {
  DTOApplicantProfileResponse,
  UpdateApplicantProfileFormData,
  DTODocumentResponse,
  DTOSetActiveDocumentRequest,
  UploadDocumentFormData,
  Education,
  DTOEducationRequest,
  DTOUpdateEducationRequest,
  Experience,
  DTOExperienceRequest,
  DTOUpdateExperienceRequest,
} from "./dto";

// --- PROFILE ---
export async function getSeekerProfileAction(): Promise<BaseResponse<DTOApplicantProfileResponse>> {
  try {
    const res = await api.get<BaseResponse<DTOApplicantProfileResponse>>("/seeker/profile");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateSeekerProfileAction(
  payload: UpdateApplicantProfileFormData
): Promise<BaseResponse<unknown>> {
  try {
    const formData = new FormData();
    if (payload.first_name) formData.append("first_name", payload.first_name);
    if (payload.last_name) formData.append("last_name", payload.last_name);
    if (payload.gender) formData.append("gender", payload.gender);
    if (payload.birth_date) formData.append("birth_date", payload.birth_date);
    if (payload.domicile) formData.append("domicile", payload.domicile);
    if (payload.about) formData.append("about", payload.about);
    if (payload.web_portfolio_url) formData.append("web_portfolio_url", payload.web_portfolio_url);
    if (payload.avatar) formData.append("avatar", payload.avatar);

    const res = await api.patch<BaseResponse<unknown>>("/seeker/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

// --- DOCUMENTS ---
export async function getSeekerDocumentsAction(): Promise<BaseResponse<DTODocumentResponse[]>> {
  try {
    const res = await api.get<BaseResponse<DTODocumentResponse[]>>("/seeker/documents");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function uploadSeekerDocumentAction(
  payload: UploadDocumentFormData
): Promise<BaseResponse<unknown>> {
  try {
    const formData = new FormData();
    formData.append("documents_type", payload.documents_type);
    formData.append("file", payload.file);

    const res = await api.post<BaseResponse<unknown>>("/seeker/documents", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function deleteSeekerDocumentAction(id: string): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.delete<BaseResponse<unknown>>(`/seeker/documents/${id}`);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function setActiveSeekerDocumentAction(
  id: string,
  payload: DTOSetActiveDocumentRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(
      `/seeker/documents/${id}/set-active`,
      payload
    );
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

// --- EDUCATIONS ---
export async function getSeekerEducationsAction(): Promise<BaseResponse<Education[]>> {
  try {
    const res = await api.get<BaseResponse<Education[]>>("/seeker/educations");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function addSeekerEducationAction(
  payload: DTOEducationRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>("/seeker/educations", payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateSeekerEducationAction(
  id: string,
  payload: DTOUpdateEducationRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(`/seeker/educations/${id}`, payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function deleteSeekerEducationAction(id: string): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.delete<BaseResponse<unknown>>(`/seeker/educations/${id}`);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

// --- EXPERIENCES ---
export async function getSeekerExperiencesAction(): Promise<BaseResponse<Experience[]>> {
  try {
    const res = await api.get<BaseResponse<Experience[]>>("/seeker/experiences");
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function addSeekerExperienceAction(
  payload: DTOExperienceRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.post<BaseResponse<unknown>>("/seeker/experiences", payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function updateSeekerExperienceAction(
  id: string,
  payload: DTOUpdateExperienceRequest
): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.patch<BaseResponse<unknown>>(`/seeker/experiences/${id}`, payload);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}

export async function deleteSeekerExperienceAction(id: string): Promise<BaseResponse<unknown>> {
  try {
    const res = await api.delete<BaseResponse<unknown>>(`/seeker/experiences/${id}`);
    return res.data;
  } catch (err) {
    return handleApiError(err);
  }
}
