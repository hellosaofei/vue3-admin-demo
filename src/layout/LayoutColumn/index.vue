<template>
  <el-container class="layout-container">
    <div class="layout-column">
      <el-scrollbar>
        <div></div>
      </el-scrollbar>
    </div>
  </el-container>
</template>

<script lang="ts" name="">
import Logo from "../components/Logo/index.vue";

import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function handleSubMenu(item) {}

const activeMenu = computed(() => {
  (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string;
});
</script>

<style></style>
