<template></template>

<script setup lang="ts">
import { computed, type Component } from "vue";

import useGlobalStore from "@/store/modules/global";
// 引入不同布局的组件
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutColumn from "./LayoutColumn/index.vue";
import LayoutHorizontal from "./LayoutHorizontal/index.vue";

type LayoutType = "vertical" | "columns" | "horizontal" | string;
const LayoutComponent: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  columns: LayoutColumn,
  horizontal: LayoutHorizontal,
};

const globalStore = useGlobalStore();
const layout = computed(() => {
  return globalStore.layout;
});

const {};
</script>

<style lang="scss" scoped></style>
