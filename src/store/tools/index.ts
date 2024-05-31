import Layout from "@/layout/index.vue";
import router from "@/routers/index.ts";

// 返回一个树状route列表
export function generateRoutes(data: any[], parentId: number) {
  let modules = import.meta.glob("@/views/**/*.vue");
  // 生成一个列表存放
  const routeList: any = [];
  for (var i = 0; i < data.length; i++) {
    // 直接操作router，判断router中是否包含当前路由
    if (data[i] && !router.hasRoute(data[i].path)) {
      if (data[i].parentId === parentId) {
        const componentPath = data[i].component;
        // 生成一个route
        const route: any = {
          path: `${data[i].path}`,
          name: `${data[i].name}`,
          component: data[i]?.component
            ? modules[`/src/views/${componentPath}.vue`]
            : Layout,
          meta: {
            title: data[i].menuName,
            icon: data[i].icon,
            isHide: data[i].isHide,
            isCache: data[i].isCache,
            isLink: data[i].isLink,
            isFull: data[i].isFull,
            isAffix: data[i].isAffix,
          },
        };
        // 如果是一级路由，那么他必定有children，生成菜单时将会成为submenu而不是menuItem
        // 那么在点击对应的breadcrumb时，就需要一个redirect以指示跳转位置
        if (data[i].menuType == "1") {
          route.redirect = `${data[i]?.redirect}` || "/home/index";
        }
        // 递归处理子节点
        const children = generateRoutes(data, data[i].menuId);

        if (children.length > 0) {
          route.children = children;
        }
        routeList.push(route);
      }
    }
  }
  return routeList;
}
// 返回一个 flatten 列表
// 遍历后端得到的路由信息，生成真实的route，
// 全部push到一个列表中，然后返回该列表
export function generateFlattenRoutes(data: any[]) {
  let modules = import.meta.glob("@/views/**/*.vue");
  // 路由列表
  const routes: any = [];
  for (var i = 0; i < data.length; i++) {
    const componentPath = data[i].component;
    // 生成一个路由
    const route: any = {
      path: `${data[i].path}`,
      name: `${data[i].name}`,
      component: data[i]?.component
        ? modules[`/src/views/${componentPath}.vue`]
        : Layout,
      meta: {
        parentId: data[i].parentId,
        title: data[i].menuName,
        icon: data[i].icon,
        isHide: data[i].isHide,
        isCache: data[i].isCache,
        isLink: data[i].isLink,
        isFull: data[i].isFull,
        isAffix: data[i].isAffix,
      },
    };
    // 表明是一级路由
    if (data[i].menuType == "1") {
      route.redirect = `${data[i]?.redirect}` || "/home/index";
    }
    // 添加到路由列表中
    routes.push(route);
  }
  return routes;
}

export function getShowDynamicMenuList(menuList: any) {
  let newMenuList: any = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item: any) => {
    return item.meta?.isHide == false;
  });
}

export function getShowStaticMenuList(menuList: any) {
  let newMenuList: any = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item: any) => {
    return item.meta?.isHide == false;
  });
}

export const getAllBreadcrumbList = (
  menuList: any,
  parent = [],
  result: { [key: string]: any } = {}
) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item];
    if (item.children)
      getAllBreadcrumbList(item.children, result[item.path], result);
  }
  return result;
};

export function getUrlAndParams() {
  const mode = import.meta.env.VITE_ROUTER_MODE;
  const url = {
    hash: location.hash.substring(1), // localhost:8080/#/dashboard   >>  /dashboard
    history: location.pathname + location.search, // localhost:8080/home/index  >>  /home/index
  };
  // @ts-ignore
  return url[mode];
}
