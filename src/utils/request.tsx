// 封装axios
import axios from 'axios';
import { getToken } from './token';
const request = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 5000, // 超时时间定下5秒钟
});
// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围内的状态码都会触发该函数
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export default request;
