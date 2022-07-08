import { PatternColors, PatternTransform } from "../types";

export const SignWaves = ({
  backgroundColor = "hsla(228, 26%, 18%, 1)",
  strokeColors = ["hsla(68, 18%, 41%, 10)"],
  rotate = "90",
  scale = "1",
}: PatternColors & PatternTransform) => {
  return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  width='80' 
  height='21' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
  <rect x='0' y='0' width='100%' height='100%' fill='${
    backgroundColor || "hsla(228, 26%, 18%, 1)"
  }' />
  <path
      d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'
      stroke-width='1.5' stroke='${
        strokeColors[0] || "hsla(68, 18%, 41%, 10)"
      }' fill='none' />
  </pattern>
  `;
};
