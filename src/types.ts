type PatternOptions = PatternColors & PatternTransform;

export type PatternType = (options: PatternOptions) => string;

export type PatternInput = {
  size?: {
    height?: string;
    width?: string;
  };
  colors?: {
    backgroundColor?: string;
    strokeColors?: string[];
  };
};

export type PatternSize = {
  height?: string;
  width?: string;
};

export type PatternTransform = {
  scale?: string;
  rotate?: string;
};

export type PatternColors = {
  backgroundColor?: string;
  strokeColors?: string[];
};
