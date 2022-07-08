import { Pattern } from "../pattern";
import * as fs from "fs";
import parse from "xml-parser";
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
} from "../patterns";
import assert from "assert";
import path from "path";

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

const ASSET_DIR = __dirname + "/../patterns/samples/";

PATTERNS.forEach(function (pattern) {
  describe(pattern.name, function () {
    it("should generate the correct SVG string", function () {
      assert.deepEqual(
        parse(
          new Pattern("Saif Sulaiman", {})
            .setPattern(pattern)
            .generatePattern()
            .toString()
        ),
        parse(
          fs.readFileSync(path.join(ASSET_DIR, pattern.name + ".svg"), "utf8")
        )
      );
    });
  });
});
