type PatternOptions = PatternColors & PatternTransform;
type PatternType = (options: PatternOptions) => string;
type PatternSize = {
    height?: string;
    width?: string;
};
type PatternTransform = {
    scale?: string;
    rotate?: string;
};
type PatternColors = {
    backgroundColor?: string;
    strokeColors?: string[];
};
type PatternOptionType = PatternSize & PatternColors & PatternTransform & {
    hash?: string;
};
export class FSPattern {
    opts: PatternOptionType;
    hash: string;
    svg: string;
    pattern: PatternType;
    constructor(str: string, options?: PatternOptionType, custom?: boolean);
    setPattern(pattern: PatternType): this;
    getPattern(): ({ backgroundColor, strokeColors, scale, rotate, }: {
        backgroundColor: any;
        strokeColors: any;
        scale: any;
        rotate: any;
    }) => string;
    generatePattern(): this;
    toSvg(): string;
    toString(): string;
    toBase64(): string;
    toDataUri(): string;
    toDataUrl(): string;
}

//# sourceMappingURL=types.d.ts.map
