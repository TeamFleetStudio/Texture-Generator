import { PatternColors, PatternTransform } from "../types";

export const Sea = ({
  backgroundColor = "hsla(228, 26%, 18%, 10)",
  strokeColors = ["hsla(68, 18%, 41%, 10)"],
  rotate = "0",
  scale = "1",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  viewBox="0,0,30,30"
  width='30px' 
  height='30px' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${
      backgroundColor || "hsla(228, 26%, 18%, 10)"
    }' />
    <path transform='translate(-15,0)' d='M-10 7.5l20 10 20-10 20 10' stroke-linecap='square' stroke-width='2'
      stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
  </pattern>`;
};
