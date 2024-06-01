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
      <AsideSubMenu :menuList="item.children" />
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
.el-menu {
  background-color: #282c34 !important;
}
.el-menu-item {
  height: 50px !important;
  font-weight: 500;
  color: #fff;
  background-color: #282c34 !important;

  &:hover,
  &.is-active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
    border-radius: 10px;
    i {
      color: var(--el-color-primary);
    }
  }
}

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
</style>

<style lang="scss">
/* 子级菜单字体高亮，父级菜单也高亮 */
.el-sub-menu.is-active > .el-sub-menu__title {
  color: var(--el-color-primary) !important;
}

/* icon图标也跟着变 */
.el-sub-menu.is-active > .el-sub-menu__title i {
  color: var(--el-color-primary) !important;
}
</style>
