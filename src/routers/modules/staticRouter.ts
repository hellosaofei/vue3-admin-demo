import Layout from "@/layout/index.vue";

export const layoutRouter = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          icon: "HomeFilled", // icon图标
          isHide: false, // 是否渲染到导航栏
          isLink: false, // 是否是外链
          isCache: false, // 是否缓存
          isAffix: true, // 是否固定路由
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
];

export const staticRouter = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
  },
  {
    path: "/static",
    name: "staticPage",
    component: Layout,
    meta: {
      title: "静态路由",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: false,
      isAffix: false,
    },
    children: [
      {
        path: "dict",
        name: "DictPage",
        component: () => import("@/views/static/dict/index.vue"),
        meta: {
          title: "字典界面",
          icon: "House",
          isHide: false,
          isLink: false,
          isCache: false,
          isAffix: false,
          activeMenu: "/static/dict",
        },
      },
    ],
  },
];

export const errorRouter = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error/403.vue"),
    meta: {
      title: "403页面",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error/403.vue"),
    meta: {
      title: "403页面",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
    meta: {
      title: "404页面",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/500.vue"),
    meta: {
      title: "500页面",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
  },
];
