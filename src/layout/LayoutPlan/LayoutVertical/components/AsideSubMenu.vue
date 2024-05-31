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
.el-menu-item {
  height: 40px !important;
  margin-bottom: 3px;
  font-weight: 500;
  color: #000000;

  /* 设置用户禁止选中 */
  user-select: none;
  border-left: 6px solid #000000;
  border-radius: 6px;

  // @apply dark:c-#E5E3FA;
  // i {
  //   transform: translate(-8px); // 图标偏移
  // }
  // span {
  //   transform: translate(-8px); // 文字偏移
  // }

  // 设置鼠标悬停时el-menu-item的样式
  &:hover {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
    border-left: 6px solid var(--el-color-primary);

    // & 含义 .el-menu-item
    border-radius: 6px;

    // 实现鼠标悬停时icon变色
    i {
      color: var(--el-color-primary);
    }
  }

  // 设置选中el-menu-item时的样式
  &.is-active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
    border-left: 6pxt solid var(--el-color-primary);
  }
}

// 子节点
:deep(.el-sub-menu__title) {
  height: 40px;
  padding-right: 0; // 去除collapse缩小多余的边框
  margin-bottom: 3px;
  font-weight: 500;
  color: #000000;

  /* 设置用户禁止选中 */
  user-select: none;
  border-left: 6px solid #000000;
  border-radius: 6px;

  @apply dark:c-#E5E3FA;
  i {
    transform: translate(-8px); // 图标偏移
  }
  span {
    transform: translate(-8px); // 文字偏移
  }
  &:hover {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
    border-left: 6px solid var(--el-color-primary);
  }
  &:active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);
    border-left: 6px solid var(--el-color-primary);
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
