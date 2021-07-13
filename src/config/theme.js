const fontSizes = ["12px", "14px", "16px", "18px", "24px", "32px", "42px"];

fontSizes.xs = fontSizes[0];
fontSizes.s = fontSizes[1];
fontSizes.m = fontSizes[2];
fontSizes.l = fontSizes[3];
fontSizes.xl = fontSizes[4];
fontSizes.xxl = fontSizes[5];

export default {
  breakpoints: ["414px", "576px", "768px", "1024px", "1200px"],
  colors: {
    base: "#252525",
    base40: "#7c7c7c",
    base80: "#d3d3d3",
    base95: "#f5f5f5",
    primary: "#6C63FF",
    primary40: "#a7a1ff",
    primary80: "#e2e0ff",
    primary90: "#f0efff",
  },
  fontFamily: "'Roboto', sans-serif",
  fontSizes,
  fontWeights: { light: "300", regular: "400", bold: "700" },
  radii: ["0", "2px", "4px", "8px", "16px", "24px", "32px", "44px"],
  space: ["0", "2px", "4px", "8px", "16px", "24px", "32px", "44px", "64px", "84px", "120px"],
  size: ["0", "2px", "4px", "8px", "16px", "24px", "32px", "44px", "64px", "84px", "120px"],
};
