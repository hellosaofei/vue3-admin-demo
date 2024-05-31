<template>
  <!-- 头像 -->
  <img
    class="w-34px h-34px rounded-full select-none"
    :src="userStore.avatar"
    alt="avatar"
  />
  <el-dropdown class="m-l-10px" :hide-on-click="false" @command="handleCommand">
    <div class="koi-dropdown">
      管理员
      <el-icon><arrow-down /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import useRouteCase from "@/hooks/route";

const userStore = useUserStore();
const { router } = useRouteCase();

const handleLayout = () => {
  window.localStorage.clear();
  router.replace("/login");
};

const handleCommand = (command: string | number) => {
  switch (command) {
    case "userCenter":
      router.push("/system/personage");
      break;
    case "logout":
      handleLayout();
      break;
  }
};
</script>

<style lang="scss" scoped>
// dropdown字体颜色
.koi-dropdown {
  color: var(--el-color-primary);
  white-space: nowrap; /* 不换行 */
  cursor: pointer;
  outline: none; // 去除伪元素
}
</style>
