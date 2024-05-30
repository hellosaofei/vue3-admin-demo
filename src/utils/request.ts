// 用于二次封装axios

import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8088",
  timeout: 3000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//  响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
