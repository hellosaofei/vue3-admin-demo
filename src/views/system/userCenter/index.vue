<template>
  <div>
    <p>useCenter</p>
    <el-input
      v-model="inputVal"
      style="width: 240px"
      placeholder="用于测试 keepalive"
    />
  </div>
</template>

<script setup lang="ts" name="UserCenter">
import { ref } from "vue";

const inputVal = ref("");
</script>
<style lang="scss" scoped></style>
