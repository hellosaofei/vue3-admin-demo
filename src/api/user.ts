// 用户登录、获取用户信息等接口

import request from "@/utils/request";

export function userLogin(data) {
  return request({
    url: "/user/login",
    method: "post",
    data: data,
  });
}

export function getUserInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token },
  });
}

export function userLogout() {
  return request({
    url: "/user/logout",
    method: "post",
  });
}
