<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    class="koi-tabs"
    @tab-remove="removeTab"
    @tab-click="clickToggleTab"
  >
    <el-tab-pane
      v-for="item in tabStore.tabList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
      :closable="item.isShowCloseIcon"
    >
      <template #label>
        <el-icon>
          <House />
        </el-icon>
        <span>
          {{ item.title }}
        </span>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts" name="Tabs">
import { ElMessage } from "element-plus";
import { type TabsPaneContext, type TabPaneName } from "element-plus";

import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import useTabStore from "@/store/modules/tabs";
import useAuthStore from "@/store/modules/auth";

const route = useRoute();
const router = useRouter();

const tabStore = useTabStore();
const authStore = useAuthStore();

const activeTab = ref(route.fullPath);

// const tabList

onMounted(() => {
  addTab();
  setActiveTab();
  initTab();
});

watch(
  () => route.fullPath,
  () => {
    setActiveTab();
    addTab();
  }
);
function setActiveTab() {
  activeTab.value = route.fullPath;
}
// 初始化 tab 内容
function initTab() {
  authStore.menuList.forEach((item: any) => {
    if (item.meta.isAffix && !item.meta.isHide) {
      const tabItem = {
        icon: item.meta.icon,
        title: item.meta.title,
        path: item.path,
        name: item.name,
        isShowCloseIcon: false,
        isCache: item.meta.isCache,
      };
      tabStore.addTab(tabItem);
    }
  });
}
// 添加一个标签式导航的item
function addTab() {
  const tab = {
    icon: route.meta.icon,
    title: route.meta.title as string,
    path: route.fullPath,
    name: route.name as string,
    isShowCloseIcon: route.meta.isAffix,
    isCache: route.meta.isCache,
  };
  if (route.fullPath == "/home") {
    tab.isShowCloseIcon = false;
  }
  tabStore.addTab(tab);
}
// 删除一个标签式导航的item
function removeTab(fullPath: TabPaneName) {
  tabStore.removeTab(fullPath, fullPath == route.fullPath);
}
// 点击标签式导航的按钮
function clickToggleTab(tab: TabsPaneContext) {
  const { props } = tab;
  router.push({
    path: props.name as string,
  });
}
</script>

<style lang="scss" scoped>
/** tabs选项卡的css开始 */
.koi-tabs {
  // 吸顶
  position: sticky;
  top: 0;

  // background-color: var(--el-bg-color);
  z-index: 10;

  // 背景变模糊
  backdrop-filter: blur(5px);
}
:deep(.el-tabs__item:first-child) {
  margin-left: 16px;
}
:deep(.el-tabs__item:nth-child(n)) {
  // 选中/未选中边框
  border: 1px solid #e0e0e6 !important;
}
:deep(.el-tabs__item:not(:active)) {
  // 设置未选中的边框
  border: 1px solid #e0e0e6;
}
:deep(.el-tabs__item) {
  height: 28px;
  margin-top: 1px;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  border: 1px solid #e0e0e6;
  border-radius: 4px;
  .is-top {
    border-bottom: none !important;
  }

  // 设置鼠标悬停时的样式
  &:hover {
    // color: $main-tabs-hover-color;
    // tab字体悬浮明亮模式（黑色），暗黑模式（蓝色）
    // color: v-bind(tabsHoverFontColor);
    background: var(--el-color-primary-light-9);
    border: none;
  }

  // 设置鼠标选中的样式（可用来定制不同配色的主题）
  &.is-active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-8);

    // 边框选中颜色
    border: 1px solid var(--el-color-primary) !important;
  }
}
:deep(.el-tabs__header) {
  display: flex;
  align-items: center;
  height: 50px;
  border-top: 1px solid var(--el-color-info-light-7); // 选项卡边框实线
  border-bottom: 1px solid var(--el-color-info-light-7); // 选项卡边框实线
}
:deep(.el-tabs__nav.is-top) {
  height: 32px; // 高度越高，可以调整tab卡距离底部的高度
  border: none; //  去除左侧tabs边框
  border-radius: 4px;
}

// 覆盖多余边框
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.el-tabs__nav-prev) {
  // 标签页多了左侧图标
  line-height: 35px;
}
:deep(.el-tabs__nav-next) {
  // 标签页多了右侧图标
  line-height: 35px;
}
.el-tabs--card {
  height: 40px !important;
}

/** tabs选项卡的css结束 */
</style>
