import api from "./api";
import type {
  RegisterData,
  RegisterResponse,
  LoginData,
  LoginResponse,
} from "../types/auth";

export const registerUser = async (
  data: RegisterData,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/auth/register", data);

  return response.data;
};

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", data);

  return response.data;
};
