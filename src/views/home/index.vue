<template>
  <div class="p-6px">这是首页</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("欢迎来到首页");
});
</script>

<style lang="scss" scoped></style>
