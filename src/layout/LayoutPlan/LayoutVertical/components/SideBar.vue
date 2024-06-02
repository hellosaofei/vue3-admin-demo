<template>
  <div>
    <el-scrollbar>
      <Logo
        :isCollapse="globalStore.isCollapse"
        :layout="globalStore.layout"
      ></Logo>

      <el-menu
        :default-active="activeMenu"
        :collapse="globalStore.isCollapse"
        :collapse-transition="false"
        background-color="#282c34"
        text-color="#fff"
        :active-text-color="activeMenuTextColor"
        class="menu-wrapper"
        :style="{ padding: !globalStore.isCollapse ? '0 8px' : '' }"
      >
        <SideBarItem :menuList="authStore.realMenuList"></SideBarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { Logo } from "@/layout/components/index";

import SideBarItem from "./SideBarItem.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

import useAuthStore from "@/store/modules/auth";
import useGlobalStore from "@/store/modules/global";

import { getCssVariableValue } from "@/utils/index";

const authStore = useAuthStore();
const globalStore = useGlobalStore();
const route = useRoute();

const activeMenuTextColor = getCssVariableValue("--el-color-primary");
const activeMenu = computed(
  () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
);
</script>

<style lang="scss" scoped>
// .el-scrollbar {
//   // 多 1% 是为了在顶部模式时防止垂直滚动
//   height: 101%;
//   :deep(.scrollbar-wrapper) {
//     // 限制水平宽度
//     overflow-x: hidden !important;
//     .el-scrollbar__view {
//       height: 100%;
//     }
//   }
//   // 滚动条
//   :deep(.el-scrollbar__bar) {
//     &.is-horizontal {
//       // 隐藏水平滚动条
//       display: none;
//     }
//     &.is-vertical {
//       // 当为顶部模式时隐藏垂直滚动条
//       display: none;
//     }
//   }
// }
.menu-wrapper {
  margin-top: 56px;
  width: 100%;
}
:deep(.el-menu) {
  border-right: 0;
}
</style>
