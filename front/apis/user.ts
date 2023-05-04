import axios from "axios";
import { backUrl } from "configs/config";

axios.defaults.baseURL = backUrl;

export function signUpAPI(data: { email: string; nickname: string; password: string }) {
  return axios.post("/auth/signup", data).then((response) => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post("/auth/login", data).then((response) => response.data);
}

export function logOutAPI() {
  return axios.post("/auth/logout").then((response) => response.data);
}
