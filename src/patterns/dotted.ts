import { PatternColors, PatternTransform } from "../types";

export const Dotted = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 1)"],
  rotate = "0",
  scale = "1",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  width='40px' 
  height='40px' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${
      backgroundColor || "hsla(228, 26%, 18%, 1)"
    }' />
    <path
        d='M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z'
        stroke-width='1' fill='${strokeColors[0] || "hsla(259, 7%, 33%, 1)"}' />
    <path d='M20 25a5 5 0 110-10 5 5 0 010 10z' stroke-width='1' stroke='none' fill='${
      strokeColors[1] || "hsla(0, 0%, 23%, 1)"
    }' />
  </pattern>`;
};
