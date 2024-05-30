<template>
  <component
    :is="LayoutComponent[globalStore.layout]"
    v-if="!isMobile"
  ></component>
  <component :is="LayoutMobile" v-if="isMobile"></component>
</template>

<script setup lang="ts">
import { type Component } from "vue";
// 从hooks中导入数据
import { useGlobalStore } from "@/hooks/store.ts";
import { isMobile } from "@/hooks/screen.ts";
import {
  LayoutColumns,
  LayoutVertical,
  LayoutClassic,
  LayoutMobile,
  LayoutHorizontal,
} from "./LayoutPlan/index.ts";

const globalStore = useGlobalStore();

type LayoutType = "vertical" | "columns" | "classic" | "horizontal" | string;
const LayoutComponent: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  columns: LayoutColumns,
  classic: LayoutClassic,
  horizontal: LayoutHorizontal,
};
</script>
