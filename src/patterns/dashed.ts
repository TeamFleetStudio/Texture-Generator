import { PatternColors, PatternTransform } from "../types";

export const Dashed = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 1)"],
  scale = "1",
  rotate = "0",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  width='40px' 
  height='20px'
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${
      backgroundColor || "hsla(228, 26%, 18%, 1)"
    }' />
    <path d='M0 5H40' stroke-width='1' stroke-dasharray='15 10 15' stroke='${
      strokeColors[0] || "hsla(68, 18%, 41%, 1)"
    }' fill='none' />
    <path d='M5 15H35' stroke-width='1' stroke='${
      strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 1)"
    }' fill='none' />
  </pattern>`;
};
