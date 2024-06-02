import Layout from "@/layout/index.vue";

export const staticRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      isHide: true, // 是否渲染到导航栏
      isCache: false,
    },
  },
  {
    path: "/home",
    component: Layout,
    name: "Home",
    meta: {
      title: "首页",
      icon: "HomeFilled", // icon图标
      isHide: false, // 是否渲染到导航栏
      isLink: false, // 是否是外链
      isCache: false, // 是否缓存
      isAffix: true, // 是否固定路由
    },
    redirect: "/home/index",
    children: [
      {
        path: "/home/index",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          icon: "House",
          isHide: false,
          isLink: false,
          isCache: true,
          isAffix: true,
          activeMenu: "/home/index",
        },
      },
      {
        path: "/home/dashboard",
        name: "Dashboard",
        component: () => import("@/views/home/dashboard.vue"),
        meta: {
          title: "数据看板",
          icon: "House",
          isHide: false,
          isLink: false,
          isCache: true,
          isAffix: false,
        },
      },
    ],
  },
  // 根路由 / redirect /home
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: Layout,
  },
  // 静态页面
  {
    path: "/static",
    name: "StaticPage",
    redirect: "/static/dict",
    component: Layout,
    meta: {
      title: "静态路由",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
    children: [
      {
        path: "/static/dict",
        name: "DictPage",
        component: () => import("@/views/static/dict/index.vue"),
        meta: {
          title: "字典界面",
          icon: "House",
          isHide: false,
          isLink: false,
          isCache: true,
          isAffix: false,
          activeMenu: "/static/dict",
        },
      },
    ],
  },
];

// 错误界面
export const errorRouter = [
  {
    path: "/error-page",
    name: "errorPage",
    component: Layout,
    meta: {
      title: "错误页面",
      icon: "House",
      isHide: false,
      isLink: false,
      isCache: true,
      isAffix: false,
    },
    redirect: "/error-page/403",
    children: [
      {
        path: "/error-page/403",
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
        path: "/error-page/404",
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
        path: "/error-page/500",
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
    ],
  },
];
