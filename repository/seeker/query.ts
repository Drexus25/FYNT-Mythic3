"use client";

import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { BaseResponse } from "@/repository/common/dto";
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
import {
  getSeekerProfileAction,
  updateSeekerProfileAction,
  getSeekerDocumentsAction,
  uploadSeekerDocumentAction,
  deleteSeekerDocumentAction,
  setActiveSeekerDocumentAction,
  getSeekerEducationsAction,
  addSeekerEducationAction,
  updateSeekerEducationAction,
  deleteSeekerEducationAction,
  getSeekerExperiencesAction,
  addSeekerExperienceAction,
  updateSeekerExperienceAction,
  deleteSeekerExperienceAction,
} from "./actions";

export const seekerKeys = {
  all: ["seeker"] as const,
  profile: () => [...seekerKeys.all, "profile"] as const,
  documents: () => [...seekerKeys.all, "documents"] as const,
  educations: () => [...seekerKeys.all, "educations"] as const,
  experiences: () => [...seekerKeys.all, "experiences"] as const,
};

// Profile Hooks
export function useSeekerProfileQuery(
  options?: Omit<UseQueryOptions<BaseResponse<DTOApplicantProfileResponse>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: seekerKeys.profile(),
    queryFn: () => getSeekerProfileAction(),
    ...options,
  });
}

export function useUpdateSeekerProfileMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, UpdateApplicantProfileFormData>
) {
  return useMutation({
    mutationFn: (payload) => updateSeekerProfileAction(payload),
    ...options,
  });
}

// Document Hooks
export function useSeekerDocumentsQuery(
  options?: Omit<UseQueryOptions<BaseResponse<DTODocumentResponse[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: seekerKeys.documents(),
    queryFn: () => getSeekerDocumentsAction(),
    ...options,
  });
}

export function useUploadSeekerDocumentMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, UploadDocumentFormData>
) {
  return useMutation({
    mutationFn: (payload) => uploadSeekerDocumentAction(payload),
    ...options,
  });
}

export function useDeleteSeekerDocumentMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, string>
) {
  return useMutation({
    mutationFn: (id) => deleteSeekerDocumentAction(id),
    ...options,
  });
}

export function useSetActiveSeekerDocumentMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOSetActiveDocumentRequest }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => setActiveSeekerDocumentAction(id, payload),
    ...options,
  });
}

// Education Hooks
export function useSeekerEducationsQuery(
  options?: Omit<UseQueryOptions<BaseResponse<Education[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: seekerKeys.educations(),
    queryFn: () => getSeekerEducationsAction(),
    ...options,
  });
}

export function useAddSeekerEducationMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOEducationRequest>
) {
  return useMutation({
    mutationFn: (payload) => addSeekerEducationAction(payload),
    ...options,
  });
}

export function useUpdateSeekerEducationMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOUpdateEducationRequest }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => updateSeekerEducationAction(id, payload),
    ...options,
  });
}

export function useDeleteSeekerEducationMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, string>
) {
  return useMutation({
    mutationFn: (id) => deleteSeekerEducationAction(id),
    ...options,
  });
}

// Experience Hooks
export function useSeekerExperiencesQuery(
  options?: Omit<UseQueryOptions<BaseResponse<Experience[]>, Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: seekerKeys.experiences(),
    queryFn: () => getSeekerExperiencesAction(),
    ...options,
  });
}

export function useAddSeekerExperienceMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, DTOExperienceRequest>
) {
  return useMutation({
    mutationFn: (payload) => addSeekerExperienceAction(payload),
    ...options,
  });
}

export function useUpdateSeekerExperienceMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, { id: string; payload: DTOUpdateExperienceRequest }>
) {
  return useMutation({
    mutationFn: ({ id, payload }) => updateSeekerExperienceAction(id, payload),
    ...options,
  });
}

export function useDeleteSeekerExperienceMutation(
  options?: UseMutationOptions<BaseResponse<unknown>, Error, string>
) {
  return useMutation({
    mutationFn: (id) => deleteSeekerExperienceAction(id),
    ...options,
  });
}

// Aliases
export const useSeekerProfile = useSeekerProfileQuery;
export const useUpdateSeekerProfile = useUpdateSeekerProfileMutation;
export const useSeekerDocuments = useSeekerDocumentsQuery;
export const useUploadSeekerDocument = useUploadSeekerDocumentMutation;
export const useDeleteSeekerDocument = useDeleteSeekerDocumentMutation;
export const useSetActiveSeekerDocument = useSetActiveSeekerDocumentMutation;
export const useSeekerEducations = useSeekerEducationsQuery;
export const useAddSeekerEducation = useAddSeekerEducationMutation;
export const useUpdateSeekerEducation = useUpdateSeekerEducationMutation;
export const useDeleteSeekerEducation = useDeleteSeekerEducationMutation;
export const useSeekerExperiences = useSeekerExperiencesQuery;
export const useAddSeekerExperience = useAddSeekerExperienceMutation;
export const useUpdateSeekerExperience = useUpdateSeekerExperienceMutation;
export const useDeleteSeekerExperience = useDeleteSeekerExperienceMutation;
