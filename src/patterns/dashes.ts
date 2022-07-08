import { PatternColors, PatternTransform } from "../types";

export const Dashes = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 1)"],
  rotate = "135",
  scale = "1",
}: PatternColors & PatternTransform) => {
  return `<pattern 
    id="pattern" 
    viewBox="0,0,25,25" 
    width="25px" 
    height="25px" 
    patternUnits='userSpaceOnUse'
    patternTransform='scale(${scale}) rotate(${rotate})'
  >
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor}' />
    <path d='M0 13H25' stroke-dasharray='15 10' stroke-width='1' stroke='${
      strokeColors[0] || "hsla(68, 18%, 41%, 1)"
    }' fill='none' />
  </pattern>`;
};
