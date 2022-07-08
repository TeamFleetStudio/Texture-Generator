var $8zHUo$objectassign = require("object-assign");
var $8zHUo$buffer = require("buffer");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "FSPattern", () => $a053e4c80346bd06$export$47606a6ae3eaed8e);

/*
https://github.com/creationix/git-sha1/blob/master/git-sha1.js

The MIT License (MIT)

Copyright (c) 2013 Tim Caswell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ "use strict";
// A streaming interface for when nothing is passed in.
function $9af9de17ae493427$var$create() {
    let h0 = 0x67452301;
    let h1 = 0xefcdab89;
    let h2 = 0x98badcfe;
    let h3 = 0x10325476;
    let h4 = 0xc3d2e1f0;
    // The first 64 bytes (16 words) is the data chunk
    const block = new Uint32Array(80);
    let offset = 0;
    let shift = 24;
    let totalLength = 0;
    // We have a full block to process.  Let's do it!
    function processBlock() {
        // Extend the sixteen 32-bit words into eighty 32-bit words:
        for(let i = 16; i < 80; i++){
            const w = block[i - 3] ^ block[i - 8] ^ block[i - 14] ^ block[i - 16];
            block[i] = w << 1 | w >>> 31;
        }
        // log(block);
        // Initialize hash value for this chunk:
        let a = h0;
        let b = h1;
        let c = h2;
        let d = h3;
        let e = h4;
        let f, k;
        // Main loop:
        for(let i1 = 0; i1 < 80; i1++){
            if (i1 < 20) {
                f = d ^ b & (c ^ d);
                k = 0x5a827999;
            } else if (i1 < 40) {
                f = b ^ c ^ d;
                k = 0x6ed9eba1;
            } else if (i1 < 60) {
                f = b & c | d & (b | c);
                k = 0x8f1bbcdc;
            } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
            }
            const temp = (a << 5 | a >>> 27) + f + e + k + (block[i1] | 0);
            e = d;
            d = c;
            c = b << 30 | b >>> 2;
            b = a;
            a = temp;
        }
        // Add this chunk's hash to result so far:
        h0 = h0 + a | 0;
        h1 = h1 + b | 0;
        h2 = h2 + c | 0;
        h3 = h3 + d | 0;
        h4 = h4 + e | 0;
        // The block is now reusable.
        offset = 0;
        for(let i2 = 0; i2 < 16; i2++)block[i2] = 0;
    }
    function write(byte) {
        block[offset] |= (byte & 0xff) << shift;
        if (shift) shift -= 8;
        else {
            offset++;
            shift = 24;
        }
        if (offset === 16) processBlock();
    }
    function updateString(string) {
        const length = string.length;
        totalLength += length * 8;
        for(let i = 0; i < length; i++)write(string.charCodeAt(i));
    }
    // The user gave us more data.  Store it!
    function update(chunk) {
        if (typeof chunk === "string") return updateString(chunk);
        const length = chunk.length;
        totalLength += length * 8;
        for(let i = 0; i < length; i++)write(chunk[i]);
    }
    function toHex(word) {
        let hex = "";
        for(let i = 28; i >= 0; i -= 4)hex += (word >> i & 0xf).toString(16);
        return hex;
    }
    // No more data will come, pad the block, process and return the result.
    function digest() {
        // Pad
        write(0x80);
        if (offset > 14 || offset === 14 && shift < 24) processBlock();
        offset = 14;
        shift = 24;
        // 64-bit length big-endian
        write(0x00); // numbers this big aren't accurate in javascript anyway
        write(0x00); // ..So just hard-code to zero.
        write(totalLength > 0xffffffffff ? totalLength / 0x10000000000 : 0x00);
        write(totalLength > 0xffffffff ? totalLength / 0x100000000 : 0x00);
        for(let s = 24; s >= 0; s -= 8)write(totalLength >> s);
        // At this point one last processBlock() should trigger and we can pull out the result.
        return toHex(h0) + toHex(h1) + toHex(h2) + toHex(h3) + toHex(h4);
    }
    return {
        update: update,
        digest: digest
    };
}
function $9af9de17ae493427$export$5091bdda49ba90f5(buffer) {
    if (buffer === undefined) return $9af9de17ae493427$var$create();
    const shasum = $9af9de17ae493427$var$create();
    shasum.update(buffer);
    return shasum.digest();
}


const $488aff3873719700$export$9698b4a30ddc2565 = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 1)"
] , scale: scale = "1" , rotate: rotate = "0"  })=>{
    return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  width='40px' 
  height='20px'
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 1)"}' />
    <path d='M0 5H40' stroke-width='1' stroke-dasharray='15 10 15' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 1)"}' fill='none' />
    <path d='M5 15H35' stroke-width='1' stroke='${strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 1)"}' fill='none' />
  </pattern>`;
};


const $cc55a469844a8ab2$export$f0ead1ea9f1e5179 = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 1)"
] , scale: scale = "1" , rotate: rotate = "0"  })=>{
    return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  viewBox="0,0,30,30" 
  width='75px' 
  height='75px' 
  patternTransform='scale(${scale}) rotate(${rotate})'
  >
    <rect x='0' y='0' width='100%'  height='100%' fill='${backgroundColor}' />
    <path d='M8 3V10 M4 29H12 M4 15H12 M8 18V25' stroke-linecap='round' stroke-width='1' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 1)"}' fill='none' />
    <path d='M22 0V4 M22 10V20 M22 26V40' stroke-linecap='round' stroke-width='1' stroke='${strokeColors[1] || strokeColors[0] || "#595f45"}' fill='none' />
    <path d='M18 7H26 M18 23H26' stroke-linecap='round' stroke-width='1' stroke='${strokeColors[2] || strokeColors[1] || strokeColors[0] || "#615c4e"}' fill='none' />
    </pattern>`;
};


const $39021bbee8cb90bb$export$573c724259860ccc = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 1)"
] , rotate: rotate = "135" , scale: scale = "1"  })=>{
    return `<pattern 
    id="pattern" 
    viewBox="0,0,25,25" 
    width="25px" 
    height="25px" 
    patternUnits='userSpaceOnUse'
    patternTransform='scale(${scale}) rotate(${rotate})'
  >
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor}' />
    <path d='M0 13H25' stroke-dasharray='15 10' stroke-width='1' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 1)"}' fill='none' />
  </pattern>`;
};


const $7fdd4947e8b90c51$export$17cc19d2cb4ebd91 = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 1)"
] , rotate: rotate = "0" , scale: scale = "1"  })=>{
    return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  width='40px' 
  height='40px' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 1)"}' />
    <path
        d='M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z'
        stroke-width='1' fill='${strokeColors[0] || "hsla(259, 7%, 33%, 1)"}' />
    <path d='M20 25a5 5 0 110-10 5 5 0 010 10z' stroke-width='1' stroke='none' fill='${strokeColors[1] || "hsla(0, 0%, 23%, 1)"}' />
  </pattern>`;
};


const $e4972b64b2b0652e$export$36e96f90176c65bc = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 10)"
] , rotate: rotate = "90" , scale: scale = "1"  })=>{
    return `<pattern 
  id="pattern" 
  viewBox="0,0,40,40" 
  width="40px" 
  height="40px" 
  patternUnits='userSpaceOnUse'
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 1)"}' />
    <path d='M0 0H40' stroke-linecap='square' stroke-width='1' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
    <path d='M0 10H40' stroke-linecap='square' stroke-width='1' stroke='${strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
    <path d='M0 20H40' stroke-linecap='square' stroke-width='1' stroke='${strokeColors[2] || strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
    <path d='M0 30H40' stroke-linecap='square' stroke-width='1' stroke='${strokeColors[3] || strokeColors[2] || strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
  </pattern>`;
};


const $559c5ed4631436a5$export$769067c4f225a8d7 = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 10)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 10)"
] , rotate: rotate = "0" , scale: scale = "1"  })=>{
    return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  viewBox="0,0,30,30"
  width='30px' 
  height='30px' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 10)"}' />
    <path transform='translate(-15,0)' d='M-10 7.5l20 10 20-10 20 10' stroke-linecap='square' stroke-width='2'
      stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
  </pattern>`;
};


const $da00a2af06affd3b$export$ff474acc27c9150c = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 10)"
] , rotate: rotate = "90" , scale: scale = "1"  })=>{
    return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse' 
  width='80' 
  height='21' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
  <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 1)"}' />
  <path
      d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'
      stroke-width='1.5' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
  </pattern>
  `;
};


const $b3705d154670067f$export$71c241d58db72aca = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 10)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 10)"
] , rotate: rotate = "45" , scale: scale = "1"  })=>{
    return `<pattern 
  id="pattern" 
  viewBox="0 0 40 40" 
  width="40px" 
  height="40px" 
  patternUnits='userSpaceOnUse' 
  patternTransform='scale(${scale}) rotate(${rotate})'>
  <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 1)"}' />
  <path
      d='M15 25 h10 m-10-5 h10 m-10-5 h10 M35 0 h10 M35 5 h10 M35 40 h10 M35 35 h10 m-50 5 H5 m-50 -5 H5 M-5 0 H5 M-15 5 H5'
      stroke-linecap='square' stroke-width='1' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
  <path
      d=' M15-5 V5 m5-10 V5 m5-10 V5 m16 10 v10 M15 35 v10 m5-10 v10 m5-10 v10 M0 15 v10 M5 15 v10 M35 15 v10 M40 15 v10'
      stroke-linecap='square' stroke-width='1' stroke='${strokeColors[1] || strokeColors[0] || "hsla(68, 18%, 41%, 10)"}' fill='none' />
  </pattern>
  `;
};


const $3cea07a5c4544a82$export$925924ad9d208590 = ({ backgroundColor: backgroundColor = "hsla(228, 26%, 18%, 1)" , strokeColors: strokeColors = [
    "hsla(68, 18%, 41%, 10)"
] , rotate: rotate = "40" , scale: scale = "2"  })=>{
    return `<pattern 
  id='pattern' 
  patternUnits='userSpaceOnUse'
  width='80' 
  height='80' 
  patternTransform='scale(${scale}) rotate(${rotate})'
  >
    <rect x='0' y='0' width='100%' height='100%' fill='${backgroundColor || "hsla(228, 26%, 18%, 1)"}' />
    <path
      d='M50 50H30v10H20m30-10v10h10V50h10V30H60V20H50v10H30V20H20v10H10v20h10v10m60 20H50V70h10V60h10v10h10M20 60v10h10v10M0 70h10V60h10M50 0v10h10v10h10V10h10M0 10h10v10h10V10h10V0M0 40V0h40m40 40H0v40h40V0h40v80H40'
      stroke-linejoin='round' stroke-linecap='round' stroke-width='1' stroke='${strokeColors[0] || "hsla(68, 18%, 41%, 10)"}'
      fill='none' />
  </pattern>`;
};




"use strict";

var $a053e4c80346bd06$require$Buffer = $8zHUo$buffer.Buffer;
const $a053e4c80346bd06$var$DEFAULTS = {
    baseColor: "#933c3c"
};
const $a053e4c80346bd06$var$PATTERNS = [
    $488aff3873719700$export$9698b4a30ddc2565,
    $cc55a469844a8ab2$export$f0ead1ea9f1e5179,
    $39021bbee8cb90bb$export$573c724259860ccc,
    $7fdd4947e8b90c51$export$17cc19d2cb4ebd91,
    $e4972b64b2b0652e$export$36e96f90176c65bc,
    $559c5ed4631436a5$export$769067c4f225a8d7,
    $da00a2af06affd3b$export$ff474acc27c9150c,
    $b3705d154670067f$export$71c241d58db72aca,
    $3cea07a5c4544a82$export$925924ad9d208590, 
];
class $a053e4c80346bd06$export$47606a6ae3eaed8e {
    constructor(str, options, custom){
        this.opts = ($parcel$interopDefault($8zHUo$objectassign))({}, $a053e4c80346bd06$var$DEFAULTS, options);
        this.hash = options?.hash || $9af9de17ae493427$export$5091bdda49ba90f5(str);
        if (!custom) {
            this.pattern = this.getPattern();
            this.generatePattern();
        }
        return this;
    }
    setPattern(pattern) {
        this.pattern = pattern;
        return this;
    }
    /**
   * Extract a substring from a hex string and parse it as an integer
   * @param {string} hash - Source hex string
   * @param {number} index - Start index of substring
   * @param {number} [length] - Length of substring. Defaults to 1.
   */ hexVal(hash, index, len) {
        return parseInt(hash.substring(index, len || 1), 16);
    }
    getPattern() {
        const pattern = $a053e4c80346bd06$var$PATTERNS[parseInt(this.hexVal(this.hash, 20).toString(), 10) % ($a053e4c80346bd06$var$PATTERNS.length - 1)];
        return pattern;
    }
    SVGWrapper({ width: width , height: height , pattern: pattern  }) {
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
                rotate: this.opts?.rotate
            })
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
        let b64;
        // Use window.btoa if in the browser; otherwise fallback to node buffers
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (typeof window !== "undefined" && typeof window.btoa === "function") // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        b64 = window.btoa(str);
        else // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /* @ts-ignore */ b64 = new $a053e4c80346bd06$require$Buffer.from(str).toString("base64");
        return b64;
    }
    toDataUri() {
        return "data:image/svg+xml;base64," + this.toBase64();
    }
    toDataUrl() {
        return 'url("' + this.toDataUri() + '")';
    }
}




//# sourceMappingURL=main.js.map
