<template>
  <div>
    <p>static/dict</p>
    <el-input
      v-model="inputVal"
      style="width: 240px"
      placeholder="输入内容以查看 keepAlive 效果"
    />
  </div>
</template>

<script setup lang="ts" name="DictPage">
import { ref } from "vue";

const inputVal = ref("");
</script>

<style lang="scss" scoped></style>
