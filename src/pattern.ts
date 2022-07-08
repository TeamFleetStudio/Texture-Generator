("use strict");

import assign from "object-assign";
import { sha1 } from "./libs/sha1";
import {
  Dashed,
  DashedPlus,
  Dashes,
  Dotted,
  Lines,
  Sea,
  SignWaves,
  ThreeLines,
  Zigzag,
} from "./patterns";
import {
  PatternSize,
  PatternType,
  PatternColors,
  PatternTransform,
} from "./types";

const DEFAULTS = {
  baseColor: "#933c3c",
};

const PATTERNS = [
  Dashed,
  DashedPlus,
  Dashes,
  Dotted,
  Lines,
  Sea,
  SignWaves,
  ThreeLines,
  Zigzag,
];

type PatternOptionType = PatternSize &
  PatternColors &
  PatternTransform & { hash?: string };

export class Pattern {
  opts: PatternOptionType;
  hash: string;
  svg: string;
  pattern: PatternType;

  constructor(str: string, options?: PatternOptionType, custom?: boolean) {
    this.opts = assign({}, DEFAULTS, options);
    this.hash = options?.hash || (sha1(str) as string);
    if (!custom) {
      this.pattern = this.getPattern();
      this.generatePattern();
    }
    return this;
  }

  setPattern(pattern: PatternType) {
    this.pattern = pattern;
    return this;
  }

  /**
   * Extract a substring from a hex string and parse it as an integer
   * @param {string} hash - Source hex string
   * @param {number} index - Start index of substring
   * @param {number} [length] - Length of substring. Defaults to 1.
   */
  private hexVal(hash: string, index?: number, len?: number) {
    return parseInt(hash.substring(index, len || 1), 16);
  }

  getPattern() {
    const pattern: ({
      backgroundColor,
      strokeColors,
      scale,
      rotate,
    }) => string =
      PATTERNS[
        parseInt(this.hexVal(this.hash, 20).toString(), 10) %
          (PATTERNS.length - 1)
      ];

    return pattern;
  }

  private SVGWrapper({
    width,
    height,
    pattern,
  }: PatternSize & { pattern: string }) {
    return `<svg viewBox="0 0 ${width}px ${height}px" xmlns="http://www.w3.org/2000/svg">
      <defs>
          ${pattern}
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>`;
  }

  generatePattern() {
    this.svg = this.SVGWrapper({
      width: this.opts.width || "500",
      height: this.opts.height || "500",
      pattern: this.pattern({
        backgroundColor: this.opts?.backgroundColor,
        strokeColors: this.opts?.strokeColors,
        scale: this.opts?.scale,
        rotate: this.opts?.rotate,
      }),
    });
    return this;
  }

  toSvg() {
    return this.svg.toString();
  }

  toString() {
    return this.toSvg();
  }

  toBase64() {
    const str = this.toSvg();
    let b64: string;

    // Use window.btoa if in the browser; otherwise fallback to node buffers
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.btoa === "function") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      b64 = window.btoa(str);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      b64 = new Buffer.from(str).toString("base64");
    }

    return b64;
  }

  toDataUri() {
    return "data:image/svg+xml;base64," + this.toBase64();
  }

  toDataUrl() {
    return 'url("' + this.toDataUri() + '")';
  }
}
