// 用户登录、获取用户信息等接口

import request from "@/utils/request";

export function getRouteList() {
  return request({
    url: "/route/list",
    method: "get",
  });
}
