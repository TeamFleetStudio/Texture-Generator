import { PatternColors, PatternTransform } from "../types";

export const Lines = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 10)"],
  rotate = "90",
  scale = "1",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id="pattern" 
  viewBox="0,0,40,40" 
  width="40px" 
  height="40px" 
  patternUnits='userSpaceOnUse'
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${
      backgroundColor || "hsla(228, 26%, 18%, 1)"
    }' />
    <path d='M0 0H40' stroke-linecap='square' stroke-width='1' stroke='${
      strokeColors[0] || "hsla(68, 18%, 41%, 10)"
    }' fill='none' />
    <path d='M0 10H40' stroke-linecap='square' stroke-width='1' stroke='${
      strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 10)"
    }' fill='none' />
    <path d='M0 20H40' stroke-linecap='square' stroke-width='1' stroke='${
      strokeColors[2] ||
      strokeColors[1] ||
      strokeColors[0] ||
      "hsla(68, 18%, 41%, 10)"
    }' fill='none' />
    <path d='M0 30H40' stroke-linecap='square' stroke-width='1' stroke='${
      strokeColors[3] ||
      strokeColors[2] ||
      strokeColors[1] ||
      strokeColors[0] ||
      "hsla(68, 18%, 41%, 10)"
    }' fill='none' />
  </pattern>`;
};
