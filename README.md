# vue3-admin-demo

安装依赖

```sh
# vue-router
npm install vue-router@4
# pinia
npm install pinia
# 用于pinia中的数据持久化
npm i pinia-plugin-persistedstate
# 用于向后端请求数据
npm i axios

# 用于处理Cookie
npm i js-cookie
# 生成唯一的字符串作为ID值
npm nanoid
#
npm i nprogress
# 用于父子组件通信
npm i mitt

# UI组件库
npm i element-plus

# vue3 Fn
npm i @vueuse/core


# 网络请求
npm i axios
```

# 对于一些函数的分析

```ts
const getAllBreadcrumbList = (
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
```

该函数的目的是从一个 route 对象中构建一个扁平化面包屑
举个例子，假设有下面的一个 router 对象

```js
const menuList = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/user",
    name: "User",
    children: [
      {
        path: "/user/profile",
        name: "Profile",
      },
      {
        path: "/user/posts",
        name: "Posts",
        children: [
          {
            path: "/user/posts/new",
            name: "New Post",
          },
        ],
      },
    ],
  },
];
```

那么经过`getAllBreadcrumbList`函数的处理，会得到下面的结果

```js
{
  '/home': [
    { path: '/home', name: 'Home' }
  ],
  '/user': [
    { path: '/user', name: 'User' }
  ],
  '/user/profile': [
    { path: '/user', name: 'User' },
    { path: '/user/profile', name: 'Profile' }
  ],
  '/user/posts': [
    { path: '/user', name: 'User' },
    { path: '/user/posts', name: 'Posts' }
  ],
  '/user/posts/new': [
    { path: '/user', name: 'User' },
    { path: '/user/posts', name: 'Posts' },
    { path: '/user/posts/new', name: 'New Post' }
  ]
}

```

## 关于 route.matched

vue-router 中，当前路由对象通过 `useStore()` 进行实例化，包含了当前路由匹配到的所有嵌套路径片段的路由信息
举个例子，假设有下面一个路由对象

```js
const routes = [
  {
    path: "/user/:id",
    component: User,
    children: [
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "posts",
        component: UserPosts,
      },
    ],
  },
];
```

- 当访问 /user/123/profile 时：route.matched 会是一个包含两个路由记录的数组：
  - > 第一个路由记录是 /user/:id 的路由配置。
  - > 第二个路由记录是 /user/:id/profile 的路由配置。
- 当访问 /user/123/posts 时：route.matched 同样会是一个包含两个路由记录的数组：
  - > 第一个路由记录是 /user/:id 的路由配置。
  - > 第二个路由记录是 /user/:id/posts 的路由配置。
