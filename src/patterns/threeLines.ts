import { PatternColors, PatternTransform } from "../types";

export const ThreeLines = ({
  backgroundColor = "hsla(228, 26%, 18%, 10)",
  strokeColors = ["hsla(68, 18%, 41%, 10)"],
  rotate = "45",
  scale = "1",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id="pattern" 
  viewBox="0 0 40 40" 
  width="40px" 
  height="40px" 
  patternUnits='userSpaceOnUse' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
  <rect x='0' y='0' width='100%' height='100%' fill='${
    backgroundColor || "hsla(228, 26%, 18%, 1)"
  }' />
  <path
      d='M15 25 h10 m-10-5 h10 m-10-5 h10 M35 0 h10 M35 5 h10 M35 40 h10 M35 35 h10 m-50 5 H5 m-50 -5 H5 M-5 0 H5 M-15 5 H5'
      stroke-linecap='square' stroke-width='1' stroke='${
        strokeColors[0] || "hsla(68, 18%, 41%, 10)"
      }' fill='none' />
  <path
      d=' M15-5 V5 m5-10 V5 m5-10 V5 m16 10 v10 M15 35 v10 m5-10 v10 m5-10 v10 M0 15 v10 M5 15 v10 M35 15 v10 M40 15 v10'
      stroke-linecap='square' stroke-width='1' stroke='${
        strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 10)"
      }' fill='none' />
  </pattern>
  `;
};
