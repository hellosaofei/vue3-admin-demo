export const useTheme = () => {
  const initThemeConfig = () => {
    document.documentElement.setAttribute("class", "");
  };

  return {
    initThemeConfig,
  };
};
