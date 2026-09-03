export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}