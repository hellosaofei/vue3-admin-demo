<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu
      v-if="item.children"
      :index="item.path"
      v-show="!item.meta.isHide"
    >
      <template #title>
        <el-icon><Stopwatch /></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <SideBarItem :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.path"
      v-show="!item.meta.isHide"
      @click="handleMenuIsLink(item)"
    >
      <el-icon><Stopwatch /></el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// import { type RouteRecord } from "vue-router";
const router = useRouter();

const handleMenuIsLink = (value: any) => {
  if (value.meta.isLink) return window.open(value.meta.isLink, "_blank");
  router.push(value.path);
};

defineProps({
  menuList: {
    type: Array,
    require: true,
  },
});
</script>

<style lang="scss" scoped>
// 子节点
:deep(.el-sub-menu__title) {
  height: 50px;
  font-weight: 500;
  color: #fff;
  &:hover {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
  }
  &:active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
  }
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu),
:deep(.el-sub-menu .el-menu-item),
:deep(.el-menu--horizontal .el-menu-item) {
  margin: 0 8px 5px;
  border-radius: 5px;
  border-right: 0;
  &.is-active,
  &:hover {
    color: var(--el-color-primary);
    background-color: var(--el-color-primary-light-8);
    border-radius: 5px;
  }
}
</style>
