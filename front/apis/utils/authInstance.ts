import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { backUrl } from 'configs/config';

axios.defaults.baseURL = backUrl;

/**
 * 중간에서 request나 response를 가로채가는 기능 구현
 */
export const authInstance = axios.create({
  baseURL: backUrl,
});

authInstance.interceptors.request.use(
  async (request: InternalAxiosRequestConfig<any>): Promise<any> => {
    const accessToken = localStorage.getItem('Token')?.replaceAll('""', '');

    if (!accessToken) return;

    request.headers['Authorization'] = `Bearer ${accessToken}`;
    authInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);
