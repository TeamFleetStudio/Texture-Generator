import { PatternColors, PatternTransform } from "../types";

export const Zigzag = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 10)"],
  rotate = "40",
  scale = "2",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse'
  width='80' 
  height='80' 
  patternTransform='scale(${scale}) rotate(${rotate})'
  >
    <rect x='0' y='0' width='100%' height='100%' fill='${
      backgroundColor || "hsla(228, 26%, 18%, 1)"
    }' />
    <path
      d='M50 50H30v10H20m30-10v10h10V50h10V30H60V20H50v10H30V20H20v10H10v20h10v10m60 20H50V70h10V60h10v10h10M20 60v10h10v10M0 70h10V60h10M50 0v10h10v10h10V10h10M0 10h10v10h10V10h10V0M0 40V0h40m40 40H0v40h40V0h40v80H40'
      stroke-linejoin='round' stroke-linecap='round' stroke-width='1' stroke='${
        strokeColors[0] || "hsla(68, 18%, 41%, 10)"
      }'
      fill='none' />
  </pattern>`;
};
