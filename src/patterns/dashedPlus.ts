import { PatternTransform } from "./../types";
import { PatternColors } from "../types";

export const DashedPlus = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 1)"],
  scale = "1",
  rotate = "0",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  viewBox="0,0,30,30" 
  width='75px' 
  height='75px' 
  patternTransform='scale(${scale}) rotate(${rotate})'
  >
    <rect x='0' y='0' width='100%'  height='100%' fill='${backgroundColor}' />
    <path d='M8 3V10 M4 29H12 M4 15H12 M8 18V25' stroke-linecap='round' stroke-width='1' stroke='${
      strokeColors[0] || "hsla(68, 18%, 41%, 1)"
    }' fill='none' />
    <path d='M22 0V4 M22 10V20 M22 26V40' stroke-linecap='round' stroke-width='1' stroke='${
      strokeColors[1] || strokeColors[0] || "#595f45"
    }' fill='none' />
    <path d='M18 7H26 M18 23H26' stroke-linecap='round' stroke-width='1' stroke='${
      strokeColors[2] || strokeColors[1] || strokeColors[0] || "#615c4e"
    }' fill='none' />
    </pattern>`;
};
