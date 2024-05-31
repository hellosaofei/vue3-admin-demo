<template>
  <Tabs v-if="isShowTab"></Tabs>
  <router-view v-slot="{ Component, route }">
    <transition>
      <keep-alive :max="16" :include="aliveRouteList">
        <component
          :is="Component"
          :key="route.fullPath"
          class="bg-#F6F9FE dark:bg-black"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import Tabs from "./Tabs/index.vue";
import { storeToRefs } from "pinia";

import useAliveRouteStore from "@/store/modules/keepAlive";
import useGlobalStore from "@/store/modules/global";
const aliveRouteStore = useAliveRouteStore();
const globalStore = useGlobalStore();

const { aliveRouteList } = storeToRefs(aliveRouteStore);
const { isShowTab } = globalStore;
</script>

<style lang="scss" scoped></style>
