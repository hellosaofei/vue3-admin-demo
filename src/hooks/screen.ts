// 用于判断当前设备的类型

import { reactive } from "vue";
import { useBreakpoints } from "@vueuse/core";

export const breakpointsEnum = {
  xl: 1600,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575,
};

const useScreenStore = () => {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum));
  // 手机端
  const isMobile = breakpoints.smaller("sm");
  // pad端
  const isPad = breakpoints.between("sm", "md");
  // pc端
  const isDesktop = breakpoints.greater("md");
  return {
    breakpoints,
    isMobile,
    isPad,
    isDesktop,
  };
};
export default useScreenStore;
