<template>
  <div class="koiLogo" v-show="hidden">
    <img
      class="m-l-15px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'vertical' || props.layout === 'mobile'"
    />
    <img
      class="m-l--3px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'classic'"
    />
    <img
      class="m-l-6px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'columns'"
    />
    <img
      class="m-l--6px m-r-12px koiLogoImg rounded-full select-none"
      :src="logoUrl"
      alt="avatar"
      v-if="props.layout === 'horizontal'"
    />
    <span
      class="koiTitle font-bold max-w-140 truncate"
      v-text="title"
      v-show="!props.isCollapse"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import useGlobalStore from "@/store/modules/global";

const globalStore = useGlobalStore();

// 接收父组件传递的参数
const props = defineProps({
  isCollapse: {
    require: false, // true显示，false隐藏
    type: Boolean,
  },
  layout: {
    default: "vertical", // 布局模式 (纵向：vertical | 分栏：columns | 经典：classic | 横向：horizontal )
    type: String,
  },
});

const title = ref("Vue3-admin");
const titleSize = ref("18px");
const logoUrl = ref(
  "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
);
const hidden = ref(true);
const logoSize = ref("34px");

const logoWidth = ref();
watch(
  () => globalStore.layout,
  () => {
    if (globalStore.layout == "classic" || globalStore.layout == "horizontal") {
      logoWidth.value = "220px";
    } else {
      logoWidth.value = "100%";
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.koiLogo {
  display: flex;
  align-items: center;
  width: v-bind(logoWidth);
  height: 56px;
  line-height: 56px;
  text-align: center;
  cursor: pointer;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
}
.koiLogoImg {
  width: v-bind(logoSize);
  height: v-bind(logoSize);
}
.koiTitle {
  font-size: v-bind(titleSize);
}
</style>
