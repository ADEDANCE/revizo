import api from "./api";

export const generateStudyResource = async (
  file: File,
  type: string,
  count?: number
) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("type", type);

  if (type === "CBT" && count) {
    formData.append("count", count.toString());
  }

  const response = await api.post("/study/generate", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getStudySession = async (id: string) => {
  const response = await api.get(`/study/history/${id}`);

  return response.data;
};

export const getStudyHistory = async () => {
  const response = await api.get("/study/history");

  return response.data;
};

export const deleteStudySession = async (id: string) => {
  const response = await api.delete(`/study/history/${id}`);

  return response.data;
};