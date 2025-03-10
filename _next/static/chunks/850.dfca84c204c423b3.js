(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [850],
  {
    65987: function (t) {
      "use strict";
      var e = {
        single_source_shortest_paths: function (t, r, i) {
          var o,
            n,
            a,
            l,
            s,
            c,
            d,
            h = {},
            m = {};
          m[r] = 0;
          var u = e.PriorityQueue.make();
          for (u.push(r, 0); !u.empty(); )
            for (a in ((n = (o = u.pop()).value),
            (l = o.cost),
            (s = t[n] || {})))
              s.hasOwnProperty(a) &&
                ((c = l + s[a]),
                (d = m[a]),
                (void 0 === m[a] || d > c) &&
                  ((m[a] = c), u.push(a, c), (h[a] = n)));
          if (void 0 !== i && void 0 === m[i])
            throw Error(
              ["Could not find a path from ", r, " to ", i, "."].join("")
            );
          return h;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var r = [], i = e; i; ) r.push(i), t[i], (i = t[i]);
          return r.reverse(), r;
        },
        find_path: function (t, r, i) {
          var o = e.single_source_shortest_paths(t, r, i);
          return e.extract_shortest_path_from_predecessor_list(o, i);
        },
        PriorityQueue: {
          make: function (t) {
            var r,
              i = e.PriorityQueue,
              o = {};
            for (r in ((t = t || {}), i)) i.hasOwnProperty(r) && (o[r] = i[r]);
            return (o.queue = []), (o.sorter = t.sorter || i.default_sorter), o;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            this.queue.push({ value: t, cost: e }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = e;
    },
    62378: function (t) {
      "use strict";
      t.exports = function (t) {
        for (var e = [], r = t.length, i = 0; i < r; i++) {
          var o = t.charCodeAt(i);
          if (o >= 55296 && o <= 56319 && r > i + 1) {
            var n = t.charCodeAt(i + 1);
            n >= 56320 &&
              n <= 57343 &&
              ((o = (o - 55296) * 1024 + n - 56320 + 65536), (i += 1));
          }
          if (o < 128) {
            e.push(o);
            continue;
          }
          if (o < 2048) {
            e.push((o >> 6) | 192), e.push((63 & o) | 128);
            continue;
          }
          if (o < 55296 || (o >= 57344 && o < 65536)) {
            e.push((o >> 12) | 224),
              e.push(((o >> 6) & 63) | 128),
              e.push((63 & o) | 128);
            continue;
          }
          if (o >= 65536 && o <= 1114111) {
            e.push((o >> 18) | 240),
              e.push(((o >> 12) & 63) | 128),
              e.push(((o >> 6) & 63) | 128),
              e.push((63 & o) | 128);
            continue;
          }
          e.push(239, 191, 189);
        }
        return new Uint8Array(e).buffer;
      };
    },
    92592: function (t, e, r) {
      let i = r(34474),
        o = r(95115),
        n = r(6907),
        a = r(93776);
      function l(t, e, r, n, a) {
        let l = [].slice.call(arguments, 1),
          s = l.length,
          c = "function" == typeof l[s - 1];
        if (!c && !i()) throw Error("Callback required as last argument");
        if (c) {
          if (s < 2) throw Error("Too few arguments provided");
          2 === s
            ? ((a = r), (r = e), (e = n = void 0))
            : 3 === s &&
              (e.getContext && void 0 === a
                ? ((a = n), (n = void 0))
                : ((a = n), (n = r), (r = e), (e = void 0)));
        } else {
          if (s < 1) throw Error("Too few arguments provided");
          return (
            1 === s
              ? ((r = e), (e = n = void 0))
              : 2 !== s || e.getContext || ((n = r), (r = e), (e = void 0)),
            new Promise(function (i, a) {
              try {
                let a = o.create(r, n);
                i(t(a, e, n));
              } catch (t) {
                a(t);
              }
            })
          );
        }
        try {
          let i = o.create(r, n);
          a(null, t(i, e, n));
        } catch (t) {
          a(t);
        }
      }
      (e.create = o.create),
        (e.toCanvas = l.bind(null, n.render)),
        (e.toDataURL = l.bind(null, n.renderToDataURL)),
        (e.toString = l.bind(null, function (t, e, r) {
          return a.render(t, r);
        }));
    },
    34474: function (t) {
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    21845: function (t, e, r) {
      let i = r(10242).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        let e = Math.floor(t / 7) + 2,
          r = i(t),
          o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
          n = [r - 7];
        for (let t = 1; t < e - 1; t++) n[t] = n[t - 1] - o;
        return n.push(6), n.reverse();
      }),
        (e.getPositions = function (t) {
          let r = [],
            i = e.getRowColCoords(t),
            o = i.length;
          for (let t = 0; t < o; t++)
            for (let e = 0; e < o; e++)
              (0 !== t || 0 !== e) &&
                (0 !== t || e !== o - 1) &&
                (t !== o - 1 || 0 !== e) &&
                r.push([i[t], i[e]]);
          return r;
        });
    },
    8260: function (t, e, r) {
      let i = r(76910),
        o = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function n(t) {
        (this.mode = i.ALPHANUMERIC), (this.data = t);
      }
      (n.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + 6 * (t % 2);
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          let e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            let r = 45 * o.indexOf(this.data[e]);
            (r += o.indexOf(this.data[e + 1])), t.put(r, 11);
          }
          this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
        }),
        (t.exports = n);
    },
    97245: function (t) {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          return ((this.buffer[Math.floor(t / 8)] >>> (7 - (t % 8))) & 1) == 1;
        },
        put: function (t, e) {
          for (let r = 0; r < e; r++)
            this.putBit(((t >>> (e - r - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          let e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    73280: function (t) {
      function e(t) {
        if (!t || t < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (e.prototype.set = function (t, e, r, i) {
        let o = t * this.size + e;
        (this.data[o] = r), i && (this.reservedBit[o] = !0);
      }),
        (e.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (e.prototype.xor = function (t, e, r) {
          this.data[t * this.size + e] ^= r;
        }),
        (e.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = e);
    },
    43424: function (t, e, r) {
      let i = r(62378),
        o = r(76910);
      function n(t) {
        (this.mode = o.BYTE),
          "string" == typeof t && (t = i(t)),
          (this.data = new Uint8Array(t));
      }
      (n.getBitsLength = function (t) {
        return 8 * t;
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          for (let e = 0, r = this.data.length; e < r; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = n);
    },
    35393: function (t, e, r) {
      let i = r(64908),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        n = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case i.L:
            return o[(t - 1) * 4 + 0];
          case i.M:
            return o[(t - 1) * 4 + 1];
          case i.Q:
            return o[(t - 1) * 4 + 2];
          case i.H:
            return o[(t - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case i.L:
              return n[(t - 1) * 4 + 0];
            case i.M:
              return n[(t - 1) * 4 + 1];
            case i.Q:
              return n[(t - 1) * 4 + 2];
            case i.H:
              return n[(t - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    64908: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t) throw Error("Param is not a string");
              let r = t.toLowerCase();
              switch (r) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    76526: function (t, e, r) {
      let i = r(10242).getSymbolSize;
      e.getPositions = function (t) {
        let e = i(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    61642: function (t, e, r) {
      let i = r(10242),
        o = i.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        let r = (t.bit << 3) | e,
          n = r << 10;
        for (; i.getBCHDigit(n) - o >= 0; ) n ^= 1335 << (i.getBCHDigit(n) - o);
        return ((r << 10) | n) ^ 21522;
      };
    },
    69729: function (t, e) {
      let r = new Uint8Array(512),
        i = new Uint8Array(256);
      !(function () {
        let t = 1;
        for (let e = 0; e < 255; e++)
          (r[e] = t), (i[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (let t = 255; t < 512; t++) r[t] = r[t - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw Error("log(" + t + ")");
          return i[t];
        }),
        (e.exp = function (t) {
          return r[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : r[i[t] + i[e]];
        });
    },
    35442: function (t, e, r) {
      let i = r(76910),
        o = r(10242);
      function n(t) {
        (this.mode = i.KANJI), (this.data = t);
      }
      (n.getBitsLength = function (t) {
        return 13 * t;
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          let e;
          for (e = 0; e < this.data.length; e++) {
            let r = o.toSJIS(this.data[e]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else if (r >= 57408 && r <= 60351) r -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[e] +
                  "\nMake sure your charset is UTF-8"
              );
            (r = ((r >>> 8) & 255) * 192 + (255 & r)), t.put(r, 13);
          }
        }),
        (t.exports = n);
    },
    27126: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let r = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          let e = t.size,
            i = 0,
            o = 0,
            n = 0,
            a = null,
            l = null;
          for (let s = 0; s < e; s++) {
            (o = n = 0), (a = l = null);
            for (let c = 0; c < e; c++) {
              let e = t.get(s, c);
              e === a
                ? o++
                : (o >= 5 && (i += r.N1 + (o - 5)), (a = e), (o = 1)),
                (e = t.get(c, s)) === l
                  ? n++
                  : (n >= 5 && (i += r.N1 + (n - 5)), (l = e), (n = 1));
            }
            o >= 5 && (i += r.N1 + (o - 5)), n >= 5 && (i += r.N1 + (n - 5));
          }
          return i;
        }),
        (e.getPenaltyN2 = function (t) {
          let e = t.size,
            i = 0;
          for (let r = 0; r < e - 1; r++)
            for (let o = 0; o < e - 1; o++) {
              let e =
                t.get(r, o) +
                t.get(r, o + 1) +
                t.get(r + 1, o) +
                t.get(r + 1, o + 1);
              (4 === e || 0 === e) && i++;
            }
          return i * r.N2;
        }),
        (e.getPenaltyN3 = function (t) {
          let e = t.size,
            i = 0,
            o = 0,
            n = 0;
          for (let r = 0; r < e; r++) {
            o = n = 0;
            for (let a = 0; a < e; a++)
              (o = ((o << 1) & 2047) | t.get(r, a)),
                a >= 10 && (1488 === o || 93 === o) && i++,
                (n = ((n << 1) & 2047) | t.get(a, r)),
                a >= 10 && (1488 === n || 93 === n) && i++;
          }
          return i * r.N3;
        }),
        (e.getPenaltyN4 = function (t) {
          let e = 0,
            i = t.data.length;
          for (let r = 0; r < i; r++) e += t.data[r];
          let o = Math.abs(Math.ceil((100 * e) / i / 5) - 10);
          return o * r.N4;
        }),
        (e.applyMask = function (t, r) {
          let i = r.size;
          for (let o = 0; o < i; o++)
            for (let n = 0; n < i; n++)
              r.isReserved(n, o) ||
                r.xor(
                  n,
                  o,
                  (function (t, r, i) {
                    switch (t) {
                      case e.Patterns.PATTERN000:
                        return (r + i) % 2 == 0;
                      case e.Patterns.PATTERN001:
                        return r % 2 == 0;
                      case e.Patterns.PATTERN010:
                        return i % 3 == 0;
                      case e.Patterns.PATTERN011:
                        return (r + i) % 3 == 0;
                      case e.Patterns.PATTERN100:
                        return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 == 0;
                      case e.Patterns.PATTERN101:
                        return ((r * i) % 2) + ((r * i) % 3) == 0;
                      case e.Patterns.PATTERN110:
                        return (((r * i) % 2) + ((r * i) % 3)) % 2 == 0;
                      case e.Patterns.PATTERN111:
                        return (((r * i) % 3) + ((r + i) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + t);
                    }
                  })(t, n, o)
                );
        }),
        (e.getBestMask = function (t, r) {
          let i = Object.keys(e.Patterns).length,
            o = 0,
            n = 1 / 0;
          for (let a = 0; a < i; a++) {
            r(a), e.applyMask(a, t);
            let i =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(a, t), i < n && ((n = i), (o = a));
          }
          return o;
        });
    },
    76910: function (t, e, r) {
      let i = r(43114),
        o = r(7007);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw Error("Invalid mode: " + t);
          if (!i.isValid(e)) throw Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return o.testNumeric(t)
            ? e.NUMERIC
            : o.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : o.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t) throw Error("Param is not a string");
              let r = t.toLowerCase();
              switch (r) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw Error("Unknown mode: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    41085: function (t, e, r) {
      let i = r(76910);
      function o(t) {
        (this.mode = i.NUMERIC), (this.data = t.toString());
      }
      (o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          let e, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (r = parseInt(this.data.substr(e, 3), 10)), t.put(r, 10);
          let i = this.data.length - e;
          i > 0 &&
            ((r = parseInt(this.data.substr(e), 10)), t.put(r, 3 * i + 1));
        }),
        (t.exports = o);
    },
    26143: function (t, e, r) {
      let i = r(69729);
      (e.mul = function (t, e) {
        let r = new Uint8Array(t.length + e.length - 1);
        for (let o = 0; o < t.length; o++)
          for (let n = 0; n < e.length; n++) r[o + n] ^= i.mul(t[o], e[n]);
        return r;
      }),
        (e.mod = function (t, e) {
          let r = new Uint8Array(t);
          for (; r.length - e.length >= 0; ) {
            let t = r[0];
            for (let o = 0; o < e.length; o++) r[o] ^= i.mul(e[o], t);
            let o = 0;
            for (; o < r.length && 0 === r[o]; ) o++;
            r = r.slice(o);
          }
          return r;
        }),
        (e.generateECPolynomial = function (t) {
          let r = new Uint8Array([1]);
          for (let o = 0; o < t; o++)
            r = e.mul(r, new Uint8Array([1, i.exp(o)]));
          return r;
        });
    },
    95115: function (t, e, r) {
      let i = r(10242),
        o = r(64908),
        n = r(97245),
        a = r(73280),
        l = r(21845),
        s = r(76526),
        c = r(27126),
        d = r(35393),
        h = r(52882),
        m = r(23103),
        u = r(61642),
        p = r(76910),
        g = r(16130);
      function w(t, e, r) {
        let i, o;
        let n = t.size,
          a = u.getEncodedBits(e, r);
        for (i = 0; i < 15; i++)
          (o = ((a >> i) & 1) == 1),
            i < 6
              ? t.set(i, 8, o, !0)
              : i < 8
              ? t.set(i + 1, 8, o, !0)
              : t.set(n - 15 + i, 8, o, !0),
            i < 8
              ? t.set(8, n - i - 1, o, !0)
              : i < 9
              ? t.set(8, 15 - i - 1 + 1, o, !0)
              : t.set(8, 15 - i - 1, o, !0);
        t.set(n - 8, 8, 1, !0);
      }
      e.create = function (t, e) {
        let r, u;
        if (void 0 === t || "" === t) throw Error("No input text");
        let f = o.M;
        return (
          void 0 !== e &&
            ((f = o.from(e.errorCorrectionLevel, o.M)),
            (r = m.from(e.version)),
            (u = c.from(e.maskPattern)),
            e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)),
          (function (t, e, r, o) {
            let u;
            if (Array.isArray(t)) u = g.fromArray(t);
            else if ("string" == typeof t) {
              let i = e;
              if (!i) {
                let e = g.rawSplit(t);
                i = m.getBestVersionForData(e, r);
              }
              u = g.fromString(t, i || 40);
            } else throw Error("Invalid data");
            let f = m.getBestVersionForData(u, r);
            if (!f)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (e) {
              if (e < f)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    f +
                    ".\n"
                );
            } else e = f;
            let v = (function (t, e, r) {
                let o = new n();
                r.forEach(function (e) {
                  o.put(e.mode.bit, 4),
                    o.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
                    e.write(o);
                });
                let a = i.getSymbolTotalCodewords(t),
                  l = d.getTotalCodewordsCount(t, e),
                  s = (a - l) * 8;
                for (
                  o.getLengthInBits() + 4 <= s && o.put(0, 4);
                  o.getLengthInBits() % 8 != 0;

                )
                  o.putBit(0);
                let c = (s - o.getLengthInBits()) / 8;
                for (let t = 0; t < c; t++) o.put(t % 2 ? 17 : 236, 8);
                return (function (t, e, r) {
                  let o, n;
                  let a = i.getSymbolTotalCodewords(e),
                    l = d.getTotalCodewordsCount(e, r),
                    s = a - l,
                    c = d.getBlocksCount(e, r),
                    m = a % c,
                    u = c - m,
                    p = Math.floor(a / c),
                    g = Math.floor(s / c),
                    w = g + 1,
                    f = p - g,
                    v = new h(f),
                    b = 0,
                    y = Array(c),
                    x = Array(c),
                    C = 0,
                    $ = new Uint8Array(t.buffer);
                  for (let t = 0; t < c; t++) {
                    let e = t < u ? g : w;
                    (y[t] = $.slice(b, b + e)),
                      (x[t] = v.encode(y[t])),
                      (b += e),
                      (C = Math.max(C, e));
                  }
                  let A = new Uint8Array(a),
                    E = 0;
                  for (o = 0; o < C; o++)
                    for (n = 0; n < c; n++)
                      o < y[n].length && (A[E++] = y[n][o]);
                  for (o = 0; o < f; o++)
                    for (n = 0; n < c; n++) A[E++] = x[n][o];
                  return A;
                })(o, t, e);
              })(e, r, u),
              b = i.getSymbolSize(e),
              y = new a(b);
            return (
              (function (t, e) {
                let r = t.size,
                  i = s.getPositions(e);
                for (let e = 0; e < i.length; e++) {
                  let o = i[e][0],
                    n = i[e][1];
                  for (let e = -1; e <= 7; e++)
                    if (!(o + e <= -1) && !(r <= o + e))
                      for (let i = -1; i <= 7; i++)
                        n + i <= -1 ||
                          r <= n + i ||
                          ((e >= 0 && e <= 6 && (0 === i || 6 === i)) ||
                          (i >= 0 && i <= 6 && (0 === e || 6 === e)) ||
                          (e >= 2 && e <= 4 && i >= 2 && i <= 4)
                            ? t.set(o + e, n + i, !0, !0)
                            : t.set(o + e, n + i, !1, !0));
                }
              })(y, e),
              (function (t) {
                let e = t.size;
                for (let r = 8; r < e - 8; r++) {
                  let e = r % 2 == 0;
                  t.set(r, 6, e, !0), t.set(6, r, e, !0);
                }
              })(y),
              (function (t, e) {
                let r = l.getPositions(e);
                for (let e = 0; e < r.length; e++) {
                  let i = r[e][0],
                    o = r[e][1];
                  for (let e = -2; e <= 2; e++)
                    for (let r = -2; r <= 2; r++)
                      -2 === e ||
                      2 === e ||
                      -2 === r ||
                      2 === r ||
                      (0 === e && 0 === r)
                        ? t.set(i + e, o + r, !0, !0)
                        : t.set(i + e, o + r, !1, !0);
                }
              })(y, e),
              w(y, r, 0),
              e >= 7 &&
                (function (t, e) {
                  let r, i, o;
                  let n = t.size,
                    a = m.getEncodedBits(e);
                  for (let e = 0; e < 18; e++)
                    (r = Math.floor(e / 3)),
                      (i = (e % 3) + n - 8 - 3),
                      (o = ((a >> e) & 1) == 1),
                      t.set(r, i, o, !0),
                      t.set(i, r, o, !0);
                })(y, e),
              (function (t, e) {
                let r = t.size,
                  i = -1,
                  o = r - 1,
                  n = 7,
                  a = 0;
                for (let l = r - 1; l > 0; l -= 2)
                  for (6 === l && l--; ; ) {
                    for (let r = 0; r < 2; r++)
                      if (!t.isReserved(o, l - r)) {
                        let i = !1;
                        a < e.length && (i = ((e[a] >>> n) & 1) == 1),
                          t.set(o, l - r, i),
                          -1 == --n && (a++, (n = 7));
                      }
                    if ((o += i) < 0 || r <= o) {
                      (o -= i), (i = -i);
                      break;
                    }
                  }
              })(y, v),
              isNaN(o) && (o = c.getBestMask(y, w.bind(null, y, r))),
              c.applyMask(o, y),
              w(y, r, o),
              {
                modules: y,
                version: e,
                errorCorrectionLevel: r,
                maskPattern: o,
                segments: u,
              }
            );
          })(t, r, f, u)
        );
      };
    },
    52882: function (t, e, r) {
      let i = r(26143);
      function o(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (o.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = i.generateECPolynomial(this.degree));
      }),
        (o.prototype.encode = function (t) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let e = new Uint8Array(t.length + this.degree);
          e.set(t);
          let r = i.mod(e, this.genPoly),
            o = this.degree - r.length;
          if (o > 0) {
            let t = new Uint8Array(this.degree);
            return t.set(r, o), t;
          }
          return r;
        }),
        (t.exports = o);
    },
    7007: function (t, e) {
      let r = "[0-9]+",
        i =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      i = i.replace(/u/g, "\\u");
      let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + ")(?:.|[\r\n]))+";
      (e.KANJI = RegExp(i, "g")),
        (e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = RegExp(o, "g")),
        (e.NUMERIC = RegExp(r, "g")),
        (e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let n = RegExp("^" + i + "$"),
        a = RegExp("^" + r + "$"),
        l = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return n.test(t);
      }),
        (e.testNumeric = function (t) {
          return a.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return l.test(t);
        });
    },
    16130: function (t, e, r) {
      let i = r(76910),
        o = r(41085),
        n = r(8260),
        a = r(43424),
        l = r(35442),
        s = r(7007),
        c = r(10242),
        d = r(65987);
      function h(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function m(t, e, r) {
        let i;
        let o = [];
        for (; null !== (i = t.exec(r)); )
          o.push({ data: i[0], index: i.index, mode: e, length: i[0].length });
        return o;
      }
      function u(t) {
        let e, r;
        let o = m(s.NUMERIC, i.NUMERIC, t),
          n = m(s.ALPHANUMERIC, i.ALPHANUMERIC, t);
        c.isKanjiModeEnabled()
          ? ((e = m(s.BYTE, i.BYTE, t)), (r = m(s.KANJI, i.KANJI, t)))
          : ((e = m(s.BYTE_KANJI, i.BYTE, t)), (r = []));
        let a = o.concat(n, e, r);
        return a
          .sort(function (t, e) {
            return t.index - e.index;
          })
          .map(function (t) {
            return { data: t.data, mode: t.mode, length: t.length };
          });
      }
      function p(t, e) {
        switch (e) {
          case i.NUMERIC:
            return o.getBitsLength(t);
          case i.ALPHANUMERIC:
            return n.getBitsLength(t);
          case i.KANJI:
            return l.getBitsLength(t);
          case i.BYTE:
            return a.getBitsLength(t);
        }
      }
      function g(t, e) {
        let r;
        let s = i.getBestModeForData(t);
        if ((r = i.from(e, s)) !== i.BYTE && r.bit < s.bit)
          throw Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              i.toString(r) +
              ".\n Suggested mode is: " +
              i.toString(s)
          );
        switch ((r !== i.KANJI || c.isKanjiModeEnabled() || (r = i.BYTE), r)) {
          case i.NUMERIC:
            return new o(t);
          case i.ALPHANUMERIC:
            return new n(t);
          case i.KANJI:
            return new l(t);
          case i.BYTE:
            return new a(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" == typeof e
              ? t.push(g(e, null))
              : e.data && t.push(g(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, r) {
          let o = u(t, c.isKanjiModeEnabled()),
            n = (function (t) {
              let e = [];
              for (let r = 0; r < t.length; r++) {
                let o = t[r];
                switch (o.mode) {
                  case i.NUMERIC:
                    e.push([
                      o,
                      { data: o.data, mode: i.ALPHANUMERIC, length: o.length },
                      { data: o.data, mode: i.BYTE, length: o.length },
                    ]);
                    break;
                  case i.ALPHANUMERIC:
                    e.push([
                      o,
                      { data: o.data, mode: i.BYTE, length: o.length },
                    ]);
                    break;
                  case i.KANJI:
                    e.push([
                      o,
                      { data: o.data, mode: i.BYTE, length: h(o.data) },
                    ]);
                    break;
                  case i.BYTE:
                    e.push([{ data: o.data, mode: i.BYTE, length: h(o.data) }]);
                }
              }
              return e;
            })(o),
            a = (function (t, e) {
              let r = {},
                o = { start: {} },
                n = ["start"];
              for (let a = 0; a < t.length; a++) {
                let l = t[a],
                  s = [];
                for (let t = 0; t < l.length; t++) {
                  let c = l[t],
                    d = "" + a + t;
                  s.push(d), (r[d] = { node: c, lastCount: 0 }), (o[d] = {});
                  for (let t = 0; t < n.length; t++) {
                    let a = n[t];
                    r[a] && r[a].node.mode === c.mode
                      ? ((o[a][d] =
                          p(r[a].lastCount + c.length, c.mode) -
                          p(r[a].lastCount, c.mode)),
                        (r[a].lastCount += c.length))
                      : (r[a] && (r[a].lastCount = c.length),
                        (o[a][d] =
                          p(c.length, c.mode) +
                          4 +
                          i.getCharCountIndicator(c.mode, e)));
                  }
                }
                n = s;
              }
              for (let t = 0; t < n.length; t++) o[n[t]].end = 0;
              return { map: o, table: r };
            })(n, r),
            l = d.find_path(a.map, "start", "end"),
            s = [];
          for (let t = 1; t < l.length - 1; t++) s.push(a.table[l[t]].node);
          return e.fromArray(
            s.reduce(function (t, e) {
              let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return r && r.mode === e.mode
                ? ((t[t.length - 1].data += e.data), t)
                : (t.push(e), t);
            }, [])
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(u(t, c.isKanjiModeEnabled()));
        });
    },
    10242: function (t, e) {
      let r;
      let i = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (e.getSymbolSize = function (t) {
        if (!t) throw Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return i[t];
        }),
        (e.getBCHDigit = function (t) {
          let e = 0;
          for (; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" != typeof t)
            throw Error('"toSJISFunc" is not a valid function.');
          r = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (e.toSJIS = function (t) {
          return r(t);
        });
    },
    43114: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    23103: function (t, e, r) {
      let i = r(10242),
        o = r(35393),
        n = r(64908),
        a = r(76910),
        l = r(43114),
        s = i.getBCHDigit(7973);
      function c(t, e) {
        return a.getCharCountIndicator(t, e) + 4;
      }
      (e.from = function (t, e) {
        return l.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, r) {
          if (!l.isValid(t)) throw Error("Invalid QR Code version");
          void 0 === r && (r = a.BYTE);
          let n = i.getSymbolTotalCodewords(t),
            s = o.getTotalCodewordsCount(t, e),
            d = (n - s) * 8;
          if (r === a.MIXED) return d;
          let h = d - c(r, t);
          switch (r) {
            case a.NUMERIC:
              return Math.floor((h / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((h / 11) * 2);
            case a.KANJI:
              return Math.floor(h / 13);
            case a.BYTE:
            default:
              return Math.floor(h / 8);
          }
        }),
        (e.getBestVersionForData = function (t, r) {
          let i;
          let o = n.from(r, n.M);
          if (Array.isArray(t)) {
            if (t.length > 1)
              return (function (t, r) {
                for (let i = 1; i <= 40; i++) {
                  let o = (function (t, e) {
                    let r = 0;
                    return (
                      t.forEach(function (t) {
                        let i = c(t.mode, e);
                        r += i + t.getBitsLength();
                      }),
                      r
                    );
                  })(t, i);
                  if (o <= e.getCapacity(i, r, a.MIXED)) return i;
                }
              })(t, o);
            if (0 === t.length) return 1;
            i = t[0];
          } else i = t;
          return (function (t, r, i) {
            for (let o = 1; o <= 40; o++)
              if (r <= e.getCapacity(o, i, t)) return o;
          })(i.mode, i.getLength(), o);
        }),
        (e.getEncodedBits = function (t) {
          if (!l.isValid(t) || t < 7) throw Error("Invalid QR Code version");
          let e = t << 12;
          for (; i.getBCHDigit(e) - s >= 0; )
            e ^= 7973 << (i.getBCHDigit(e) - s);
          return (t << 12) | e;
        });
    },
    6907: function (t, e, r) {
      let i = r(89653);
      (e.render = function (t, e, r) {
        var o;
        let n = r,
          a = e;
        void 0 !== n || (e && e.getContext) || ((n = e), (e = void 0)),
          e ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (n = i.getOptions(n));
        let l = i.getImageWidth(t.modules.size, n),
          s = a.getContext("2d"),
          c = s.createImageData(l, l);
        return (
          i.qrToImageData(c.data, t, n),
          (o = a),
          s.clearRect(0, 0, o.width, o.height),
          o.style || (o.style = {}),
          (o.height = l),
          (o.width = l),
          (o.style.height = l + "px"),
          (o.style.width = l + "px"),
          s.putImageData(c, 0, 0),
          a
        );
      }),
        (e.renderToDataURL = function (t, r, i) {
          let o = i;
          void 0 !== o || (r && r.getContext) || ((o = r), (r = void 0)),
            o || (o = {});
          let n = e.render(t, r, o),
            a = o.type || "image/png",
            l = o.rendererOpts || {};
          return n.toDataURL(a, l.quality);
        });
    },
    93776: function (t, e, r) {
      let i = r(89653);
      function o(t, e) {
        let r = t.a / 255,
          i = e + '="' + t.hex + '"';
        return r < 1
          ? i + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : i;
      }
      function n(t, e, r) {
        let i = t + e;
        return void 0 !== r && (i += " " + r), i;
      }
      e.render = function (t, e, r) {
        let a = i.getOptions(e),
          l = t.modules.size,
          s = t.modules.data,
          c = l + 2 * a.margin,
          d = a.color.light.a
            ? "<path " +
              o(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          h =
            "<path " +
            o(a.color.dark, "stroke") +
            ' d="' +
            (function (t, e, r) {
              let i = "",
                o = 0,
                a = !1,
                l = 0;
              for (let s = 0; s < t.length; s++) {
                let c = Math.floor(s % e),
                  d = Math.floor(s / e);
                c || a || (a = !0),
                  t[s]
                    ? (l++,
                      (s > 0 && c > 0 && t[s - 1]) ||
                        ((i += a ? n("M", c + r, 0.5 + d + r) : n("m", o, 0)),
                        (o = 0),
                        (a = !1)),
                      (c + 1 < e && t[s + 1]) || ((i += n("h", l)), (l = 0)))
                    : o++;
              }
              return i;
            })(s, l, a.margin) +
            '"/>',
          m = a.width
            ? 'width="' + a.width + '" height="' + a.width + '" '
            : "",
          u =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            m +
            ('viewBox="0 0 ' + c) +
            " " +
            c +
            '" shape-rendering="crispEdges">' +
            d +
            h +
            "</svg>\n";
        return "function" == typeof r && r(null, u), u;
      };
    },
    89653: function (t, e) {
      function r(t) {
        if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
          throw Error("Color should be defined as hex string");
        let e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw Error("Invalid hex color: " + t);
        (3 === e.length || 4 === e.length) &&
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        let r = parseInt(e.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        let e =
            void 0 === t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          i = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: i,
          scale: i ? 4 : o,
          margin: e,
          color: {
            dark: r(t.color.dark || "#000000ff"),
            light: r(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, r) {
          let i = e.getScale(t, r);
          return Math.floor((t + 2 * r.margin) * i);
        }),
        (e.qrToImageData = function (t, r, i) {
          let o = r.modules.size,
            n = r.modules.data,
            a = e.getScale(o, i),
            l = Math.floor((o + 2 * i.margin) * a),
            s = i.margin * a,
            c = [i.color.light, i.color.dark];
          for (let e = 0; e < l; e++)
            for (let r = 0; r < l; r++) {
              let d = (e * l + r) * 4,
                h = i.color.light;
              if (e >= s && r >= s && e < l - s && r < l - s) {
                let t = Math.floor((e - s) / a),
                  i = Math.floor((r - s) / a);
                h = c[n[t * o + i] ? 1 : 0];
              }
              (t[d++] = h.r), (t[d++] = h.g), (t[d++] = h.b), (t[d] = h.a);
            }
        });
    },
    77850: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          W3mAccountButton: function () {
            return iC;
          },
          W3mConnectButton: function () {
            return iJ;
          },
          W3mCoreButton: function () {
            return i7;
          },
          W3mModal: function () {
            return op;
          },
          W3mNetworkSwitch: function () {
            return ob;
          },
          W3mQrCode: function () {
            return rN;
          },
        });
      /**
       * @license
       * Copyright 2019 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let i = window,
        o =
          i.ShadowRoot &&
          (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        n = Symbol(),
        a = new WeakMap();
      class l {
        constructor(t, e, r) {
          if (((this._$cssResult$ = !0), r !== n))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = t), (this.t = e);
        }
        get styleSheet() {
          let t = this.o,
            e = this.t;
          if (o && void 0 === t) {
            let r = void 0 !== e && 1 === e.length;
            r && (t = a.get(e)),
              void 0 === t &&
                ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
                r && a.set(e, t));
          }
          return t;
        }
        toString() {
          return this.cssText;
        }
      }
      let s = (t) => new l("string" == typeof t ? t : t + "", void 0, n),
        c = (t, ...e) => {
          let r =
            1 === t.length
              ? t[0]
              : e.reduce(
                  (e, r, i) =>
                    e +
                    ((t) => {
                      if (!0 === t._$cssResult$) return t.cssText;
                      if ("number" == typeof t) return t;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          t +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(r) +
                    t[i + 1],
                  t[0]
                );
          return new l(r, t, n);
        },
        d = (t, e) => {
          o
            ? (t.adoptedStyleSheets = e.map((t) =>
                t instanceof CSSStyleSheet ? t : t.styleSheet
              ))
            : e.forEach((e) => {
                let r = document.createElement("style"),
                  o = i.litNonce;
                void 0 !== o && r.setAttribute("nonce", o),
                  (r.textContent = e.cssText),
                  t.appendChild(r);
              });
        },
        h = o
          ? (t) => t
          : (t) =>
              t instanceof CSSStyleSheet
                ? ((t) => {
                    let e = "";
                    for (let r of t.cssRules) e += r.cssText;
                    return s(e);
                  })(t)
                : t,
        m = window,
        u = m.trustedTypes,
        p = u ? u.emptyScript : "",
        g = m.reactiveElementPolyfillSupport,
        w = {
          toAttribute(t, e) {
            switch (e) {
              case Boolean:
                t = t ? p : null;
                break;
              case Object:
              case Array:
                t = null == t ? t : JSON.stringify(t);
            }
            return t;
          },
          fromAttribute(t, e) {
            let r = t;
            switch (e) {
              case Boolean:
                r = null !== t;
                break;
              case Number:
                r = null === t ? null : Number(t);
                break;
              case Object:
              case Array:
                try {
                  r = JSON.parse(t);
                } catch (t) {
                  r = null;
                }
            }
            return r;
          },
        },
        f = (t, e) => e !== t && (e == e || t == t),
        v = {
          attribute: !0,
          type: String,
          converter: w,
          reflect: !1,
          hasChanged: f,
        };
      class b extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this.u();
        }
        static addInitializer(t) {
          var e;
          this.finalize(),
            (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
        }
        static get observedAttributes() {
          this.finalize();
          let t = [];
          return (
            this.elementProperties.forEach((e, r) => {
              let i = this._$Ep(r, e);
              void 0 !== i && (this._$Ev.set(i, r), t.push(i));
            }),
            t
          );
        }
        static createProperty(t, e = v) {
          if (
            (e.state && (e.attribute = !1),
            this.finalize(),
            this.elementProperties.set(t, e),
            !e.noAccessor && !this.prototype.hasOwnProperty(t))
          ) {
            let r = "symbol" == typeof t ? Symbol() : "__" + t,
              i = this.getPropertyDescriptor(t, r, e);
            void 0 !== i && Object.defineProperty(this.prototype, t, i);
          }
        }
        static getPropertyDescriptor(t, e, r) {
          return {
            get() {
              return this[e];
            },
            set(i) {
              let o = this[t];
              (this[e] = i), this.requestUpdate(t, o, r);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(t) {
          return this.elementProperties.get(t) || v;
        }
        static finalize() {
          if (this.hasOwnProperty("finalized")) return !1;
          this.finalized = !0;
          let t = Object.getPrototypeOf(this);
          if (
            (t.finalize(),
            void 0 !== t.h && (this.h = [...t.h]),
            (this.elementProperties = new Map(t.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            let t = this.properties,
              e = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t),
              ];
            for (let r of e) this.createProperty(r, t[r]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(t) {
          let e = [];
          if (Array.isArray(t)) {
            let r = new Set(t.flat(1 / 0).reverse());
            for (let t of r) e.unshift(h(t));
          } else void 0 !== t && e.push(h(t));
          return e;
        }
        static _$Ep(t, e) {
          let r = e.attribute;
          return !1 === r
            ? void 0
            : "string" == typeof r
            ? r
            : "string" == typeof t
            ? t.toLowerCase()
            : void 0;
        }
        u() {
          var t;
          (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (t = this.constructor.h) ||
              void 0 === t ||
              t.forEach((t) => t(this));
        }
        addController(t) {
          var e, r;
          (null !== (e = this._$ES) && void 0 !== e
            ? e
            : (this._$ES = [])
          ).push(t),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (r = t.hostConnected) || void 0 === r || r.call(t));
        }
        removeController(t) {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.splice(this._$ES.indexOf(t) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((t, e) => {
            this.hasOwnProperty(e) &&
              (this._$Ei.set(e, this[e]), delete this[e]);
          });
        }
        createRenderRoot() {
          var t;
          let e =
            null !== (t = this.shadowRoot) && void 0 !== t
              ? t
              : this.attachShadow(this.constructor.shadowRootOptions);
          return d(e, this.constructor.elementStyles), e;
        }
        connectedCallback() {
          var t;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostConnected) || void 0 === e
                  ? void 0
                  : e.call(t);
              });
        }
        enableUpdating(t) {}
        disconnectedCallback() {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((t) => {
              var e;
              return null === (e = t.hostDisconnected) || void 0 === e
                ? void 0
                : e.call(t);
            });
        }
        attributeChangedCallback(t, e, r) {
          this._$AK(t, r);
        }
        _$EO(t, e, r = v) {
          var i;
          let o = this.constructor._$Ep(t, r);
          if (void 0 !== o && !0 === r.reflect) {
            let n = (
              void 0 !==
              (null === (i = r.converter) || void 0 === i
                ? void 0
                : i.toAttribute)
                ? r.converter
                : w
            ).toAttribute(e, r.type);
            (this._$El = t),
              null == n ? this.removeAttribute(o) : this.setAttribute(o, n),
              (this._$El = null);
          }
        }
        _$AK(t, e) {
          var r;
          let i = this.constructor,
            o = i._$Ev.get(t);
          if (void 0 !== o && this._$El !== o) {
            let t = i.getPropertyOptions(o),
              n =
                "function" == typeof t.converter
                  ? { fromAttribute: t.converter }
                  : void 0 !==
                    (null === (r = t.converter) || void 0 === r
                      ? void 0
                      : r.fromAttribute)
                  ? t.converter
                  : w;
            (this._$El = o),
              (this[o] = n.fromAttribute(e, t.type)),
              (this._$El = null);
          }
        }
        requestUpdate(t, e, r) {
          let i = !0;
          void 0 !== t &&
            ((
              (r = r || this.constructor.getPropertyOptions(t)).hasChanged || f
            )(this[t], e)
              ? (this._$AL.has(t) || this._$AL.set(t, e),
                !0 === r.reflect &&
                  this._$El !== t &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(t, r)))
              : (i = !1)),
            !this.isUpdatePending && i && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (t) {
            Promise.reject(t);
          }
          let t = this.scheduleUpdate();
          return null != t && (await t), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var t;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei &&
              (this._$Ei.forEach((t, e) => (this[e] = t)),
              (this._$Ei = void 0));
          let e = !1,
            r = this._$AL;
          try {
            (e = this.shouldUpdate(r))
              ? (this.willUpdate(r),
                null === (t = this._$ES) ||
                  void 0 === t ||
                  t.forEach((t) => {
                    var e;
                    return null === (e = t.hostUpdate) || void 0 === e
                      ? void 0
                      : e.call(t);
                  }),
                this.update(r))
              : this._$Ek();
          } catch (t) {
            throw ((e = !1), this._$Ek(), t);
          }
          e && this._$AE(r);
        }
        willUpdate(t) {}
        _$AE(t) {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((t) => {
              var e;
              return null === (e = t.hostUpdated) || void 0 === e
                ? void 0
                : e.call(t);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
            this.updated(t);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(t) {
          return !0;
        }
        update(t) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(t) {}
        firstUpdated(t) {}
      }
      (b.finalized = !0),
        (b.elementProperties = new Map()),
        (b.elementStyles = []),
        (b.shadowRootOptions = { mode: "open" }),
        null == g || g({ ReactiveElement: b }),
        (null !== (tu = m.reactiveElementVersions) && void 0 !== tu
          ? tu
          : (m.reactiveElementVersions = [])
        ).push("1.6.1");
      let y = window,
        x = y.trustedTypes,
        C = x ? x.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
        $ = "$lit$",
        A = `lit$${(Math.random() + "").slice(9)}$`,
        E = "?" + A,
        k = `<${E}>`,
        O = document,
        I = () => O.createComment(""),
        _ = (t) =>
          null === t || ("object" != typeof t && "function" != typeof t),
        T = Array.isArray,
        P = (t) =>
          T(t) ||
          "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
        M = "[ 	\n\f\r]",
        N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        j = /-->/g,
        R = />/g,
        L = RegExp(
          `>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        S = /'/g,
        W = /"/g,
        D = /^(?:script|style|textarea|title)$/i,
        B =
          (t) =>
          (e, ...r) => ({ _$litType$: t, strings: e, values: r }),
        U = B(1),
        H = B(2),
        z = Symbol.for("lit-noChange"),
        Z = Symbol.for("lit-nothing"),
        V = new WeakMap(),
        F = O.createTreeWalker(O, 129, null, !1),
        G = (t, e) => {
          let r = t.length - 1,
            i = [],
            o,
            n = 2 === e ? "<svg>" : "",
            a = N;
          for (let e = 0; e < r; e++) {
            let r = t[e],
              l,
              s,
              c = -1,
              d = 0;
            for (
              ;
              d < r.length && ((a.lastIndex = d), null !== (s = a.exec(r)));

            )
              (d = a.lastIndex),
                a === N
                  ? "!--" === s[1]
                    ? (a = j)
                    : void 0 !== s[1]
                    ? (a = R)
                    : void 0 !== s[2]
                    ? (D.test(s[2]) && (o = RegExp("</" + s[2], "g")), (a = L))
                    : void 0 !== s[3] && (a = L)
                  : a === L
                  ? ">" === s[0]
                    ? ((a = null != o ? o : N), (c = -1))
                    : void 0 === s[1]
                    ? (c = -2)
                    : ((c = a.lastIndex - s[2].length),
                      (l = s[1]),
                      (a = void 0 === s[3] ? L : '"' === s[3] ? W : S))
                  : a === W || a === S
                  ? (a = L)
                  : a === j || a === R
                  ? (a = N)
                  : ((a = L), (o = void 0));
            let h = a === L && t[e + 1].startsWith("/>") ? " " : "";
            n +=
              a === N
                ? r + k
                : c >= 0
                ? (i.push(l), r.slice(0, c) + $ + r.slice(c) + A + h)
                : r + A + (-2 === c ? (i.push(void 0), e) : h);
          }
          let l = n + (t[r] || "<?>") + (2 === e ? "</svg>" : "");
          if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
            throw Error("invalid template strings array");
          return [void 0 !== C ? C.createHTML(l) : l, i];
        };
      class q {
        constructor({ strings: t, _$litType$: e }, r) {
          let i;
          this.parts = [];
          let o = 0,
            n = 0,
            a = t.length - 1,
            l = this.parts,
            [s, c] = G(t, e);
          if (
            ((this.el = q.createElement(s, r)),
            (F.currentNode = this.el.content),
            2 === e)
          ) {
            let t = this.el.content,
              e = t.firstChild;
            e.remove(), t.append(...e.childNodes);
          }
          for (; null !== (i = F.nextNode()) && l.length < a; ) {
            if (1 === i.nodeType) {
              if (i.hasAttributes()) {
                let t = [];
                for (let e of i.getAttributeNames())
                  if (e.endsWith($) || e.startsWith(A)) {
                    let r = c[n++];
                    if ((t.push(e), void 0 !== r)) {
                      let t = i.getAttribute(r.toLowerCase() + $).split(A),
                        e = /([.?@])?(.*)/.exec(r);
                      l.push({
                        type: 1,
                        index: o,
                        name: e[2],
                        strings: t,
                        ctor:
                          "." === e[1]
                            ? X
                            : "?" === e[1]
                            ? te
                            : "@" === e[1]
                            ? tr
                            : J,
                      });
                    } else l.push({ type: 6, index: o });
                  }
                for (let e of t) i.removeAttribute(e);
              }
              if (D.test(i.tagName)) {
                let t = i.textContent.split(A),
                  e = t.length - 1;
                if (e > 0) {
                  i.textContent = x ? x.emptyScript : "";
                  for (let r = 0; r < e; r++)
                    i.append(t[r], I()),
                      F.nextNode(),
                      l.push({ type: 2, index: ++o });
                  i.append(t[e], I());
                }
              }
            } else if (8 === i.nodeType) {
              if (i.data === E) l.push({ type: 2, index: o });
              else {
                let t = -1;
                for (; -1 !== (t = i.data.indexOf(A, t + 1)); )
                  l.push({ type: 7, index: o }), (t += A.length - 1);
              }
            }
            o++;
          }
        }
        static createElement(t, e) {
          let r = O.createElement("template");
          return (r.innerHTML = t), r;
        }
      }
      function K(t, e, r = t, i) {
        var o, n, a;
        if (e === z) return e;
        let l =
            void 0 !== i
              ? null === (o = r._$Co) || void 0 === o
                ? void 0
                : o[i]
              : r._$Cl,
          s = _(e) ? void 0 : e._$litDirective$;
        return (
          (null == l ? void 0 : l.constructor) !== s &&
            (null === (n = null == l ? void 0 : l._$AO) ||
              void 0 === n ||
              n.call(l, !1),
            void 0 === s ? (l = void 0) : (l = new s(t))._$AT(t, r, i),
            void 0 !== i
              ? ((null !== (a = r._$Co) && void 0 !== a ? a : (r._$Co = []))[
                  i
                ] = l)
              : (r._$Cl = l)),
          void 0 !== l && (e = K(t, l._$AS(t, e.values), l, i)),
          e
        );
      }
      class Y {
        constructor(t, e) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = t),
            (this._$AM = e);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t) {
          var e;
          let {
              el: { content: r },
              parts: i,
            } = this._$AD,
            o = (
              null !== (e = null == t ? void 0 : t.creationScope) &&
              void 0 !== e
                ? e
                : O
            ).importNode(r, !0);
          F.currentNode = o;
          let n = F.nextNode(),
            a = 0,
            l = 0,
            s = i[0];
          for (; void 0 !== s; ) {
            if (a === s.index) {
              let e;
              2 === s.type
                ? (e = new Q(n, n.nextSibling, this, t))
                : 1 === s.type
                ? (e = new s.ctor(n, s.name, s.strings, this, t))
                : 6 === s.type && (e = new ti(n, this, t)),
                this._$AV.push(e),
                (s = i[++l]);
            }
            a !== (null == s ? void 0 : s.index) && ((n = F.nextNode()), a++);
          }
          return (F.currentNode = O), o;
        }
        v(t) {
          let e = 0;
          for (let r of this._$AV)
            void 0 !== r &&
              (void 0 !== r.strings
                ? (r._$AI(t, r, e), (e += r.strings.length - 2))
                : r._$AI(t[e])),
              e++;
        }
      }
      class Q {
        constructor(t, e, r, i) {
          var o;
          (this.type = 2),
            (this._$AH = Z),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = e),
            (this._$AM = r),
            (this.options = i),
            (this._$Cp =
              null === (o = null == i ? void 0 : i.isConnected) ||
              void 0 === o ||
              o);
        }
        get _$AU() {
          var t, e;
          return null !==
            (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
            void 0 !== e
            ? e
            : this._$Cp;
        }
        get parentNode() {
          let t = this._$AA.parentNode,
            e = this._$AM;
          return (
            void 0 !== e &&
              11 === (null == t ? void 0 : t.nodeType) &&
              (t = e.parentNode),
            t
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t, e = this) {
          _((t = K(this, t, e)))
            ? t === Z || null == t || "" === t
              ? (this._$AH !== Z && this._$AR(), (this._$AH = Z))
              : t !== this._$AH && t !== z && this._(t)
            : void 0 !== t._$litType$
            ? this.g(t)
            : void 0 !== t.nodeType
            ? this.$(t)
            : P(t)
            ? this.T(t)
            : this._(t);
        }
        k(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        $(t) {
          this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
        }
        _(t) {
          this._$AH !== Z && _(this._$AH)
            ? (this._$AA.nextSibling.data = t)
            : this.$(O.createTextNode(t)),
            (this._$AH = t);
        }
        g(t) {
          var e;
          let { values: r, _$litType$: i } = t,
            o =
              "number" == typeof i
                ? this._$AC(t)
                : (void 0 === i.el &&
                    (i.el = q.createElement(i.h, this.options)),
                  i);
          if (
            (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o
          )
            this._$AH.v(r);
          else {
            let t = new Y(o, this),
              e = t.u(this.options);
            t.v(r), this.$(e), (this._$AH = t);
          }
        }
        _$AC(t) {
          let e = V.get(t.strings);
          return void 0 === e && V.set(t.strings, (e = new q(t))), e;
        }
        T(t) {
          T(this._$AH) || ((this._$AH = []), this._$AR());
          let e = this._$AH,
            r,
            i = 0;
          for (let o of t)
            i === e.length
              ? e.push(
                  (r = new Q(this.k(I()), this.k(I()), this, this.options))
                )
              : (r = e[i]),
              r._$AI(o),
              i++;
          i < e.length &&
            (this._$AR(r && r._$AB.nextSibling, i), (e.length = i));
        }
        _$AR(t = this._$AA.nextSibling, e) {
          var r;
          for (
            null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, e);
            t && t !== this._$AB;

          ) {
            let e = t.nextSibling;
            t.remove(), (t = e);
          }
        }
        setConnected(t) {
          var e;
          void 0 === this._$AM &&
            ((this._$Cp = t),
            null === (e = this._$AP) || void 0 === e || e.call(this, t));
        }
      }
      class J {
        constructor(t, e, r, i, o) {
          (this.type = 1),
            (this._$AH = Z),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = e),
            (this._$AM = i),
            (this.options = o),
            r.length > 2 || "" !== r[0] || "" !== r[1]
              ? ((this._$AH = Array(r.length - 1).fill(new String())),
                (this.strings = r))
              : (this._$AH = Z);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t, e = this, r, i) {
          let o = this.strings,
            n = !1;
          if (void 0 === o)
            (n = !_((t = K(this, t, e, 0))) || (t !== this._$AH && t !== z)) &&
              (this._$AH = t);
          else {
            let i, a;
            let l = t;
            for (t = o[0], i = 0; i < o.length - 1; i++)
              (a = K(this, l[r + i], e, i)) === z && (a = this._$AH[i]),
                n || (n = !_(a) || a !== this._$AH[i]),
                a === Z
                  ? (t = Z)
                  : t !== Z && (t += (null != a ? a : "") + o[i + 1]),
                (this._$AH[i] = a);
          }
          n && !i && this.j(t);
        }
        j(t) {
          t === Z
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != t ? t : "");
        }
      }
      class X extends J {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(t) {
          this.element[this.name] = t === Z ? void 0 : t;
        }
      }
      let tt = x ? x.emptyScript : "";
      class te extends J {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(t) {
          t && t !== Z
            ? this.element.setAttribute(this.name, tt)
            : this.element.removeAttribute(this.name);
        }
      }
      class tr extends J {
        constructor(t, e, r, i, o) {
          super(t, e, r, i, o), (this.type = 5);
        }
        _$AI(t, e = this) {
          var r;
          if (
            (t = null !== (r = K(this, t, e, 0)) && void 0 !== r ? r : Z) === z
          )
            return;
          let i = this._$AH,
            o =
              (t === Z && i !== Z) ||
              t.capture !== i.capture ||
              t.once !== i.once ||
              t.passive !== i.passive,
            n = t !== Z && (i === Z || o);
          o && this.element.removeEventListener(this.name, this, i),
            n && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
        }
        handleEvent(t) {
          var e, r;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (r =
                    null === (e = this.options) || void 0 === e
                      ? void 0
                      : e.host) && void 0 !== r
                  ? r
                  : this.element,
                t
              )
            : this._$AH.handleEvent(t);
        }
      }
      class ti {
        constructor(t, e, r) {
          (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = e),
            (this.options = r);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          K(this, t);
        }
      }
      let to = y.litHtmlPolyfillSupport;
      null == to || to(q, Q),
        (null !== (tp = y.litHtmlVersions) && void 0 !== tp
          ? tp
          : (y.litHtmlVersions = [])
        ).push("2.7.4");
      let tn = (t, e, r) => {
        var i, o;
        let n =
            null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i
              ? i
              : e,
          a = n._$litPart$;
        if (void 0 === a) {
          let t =
            null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o
              ? o
              : null;
          n._$litPart$ = a = new Q(
            e.insertBefore(I(), t),
            t,
            void 0,
            null != r ? r : {}
          );
        }
        return a._$AI(t), a;
      };
      class ta extends b {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var t, e;
          let r = super.createRenderRoot();
          return (
            (null !== (t = (e = this.renderOptions).renderBefore) &&
              void 0 !== t) ||
              (e.renderBefore = r.firstChild),
            r
          );
        }
        update(t) {
          let e = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(t),
            (this._$Do = tn(e, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var t;
          super.connectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
        }
        render() {
          return z;
        }
      }
      (ta.finalized = !0),
        (ta._$litElement$ = !0),
        null === (tg = globalThis.litElementHydrateSupport) ||
          void 0 === tg ||
          tg.call(globalThis, { LitElement: ta });
      let tl = globalThis.litElementPolyfillSupport;
      null == tl || tl({ LitElement: ta }),
        (null !== (tw = globalThis.litElementVersions) && void 0 !== tw
          ? tw
          : (globalThis.litElementVersions = [])
        ).push("3.3.2");
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let ts = (t) => (e) =>
          "function" == typeof e
            ? (customElements.define(t, e), e)
            : ((t, e) => {
                let { kind: r, elements: i } = e;
                return {
                  kind: r,
                  elements: i,
                  finisher(e) {
                    customElements.define(t, e);
                  },
                };
              })(t, e),
        tc = (t, e) =>
          "method" !== e.kind || !e.descriptor || "value" in e.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: e.key,
                initializer() {
                  "function" == typeof e.initializer &&
                    (this[e.key] = e.initializer.call(this));
                },
                finisher(r) {
                  r.createProperty(e.key, t);
                },
              }
            : {
                ...e,
                finisher(r) {
                  r.createProperty(e.key, t);
                },
              };
      function td(t) {
        return (e, r) =>
          void 0 !== r
            ? ((t, e, r) => {
                e.constructor.createProperty(r, t);
              })(t, e, r)
            : tc(t, e);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ function th(t) {
        return td({ ...t, state: !0 });
      }
      null !=
        (null === (tf = window.HTMLSlotElement) || void 0 === tf
          ? void 0
          : tf.prototype.assignedElements) ||
        ((t, e) =>
          t.assignedNodes(e).filter((t) => t.nodeType === Node.ELEMENT_NODE));
      var tm,
        tu,
        tp,
        tg,
        tw,
        tf,
        tv,
        tb = r(50531);
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let ty = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6,
      };
      class tx {
        constructor(t) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t, e, r) {
          (this._$Ct = t), (this._$AM = e), (this._$Ci = r);
        }
        _$AS(t, e) {
          return this.update(t, e);
        }
        update(t, e) {
          return this.render(...e);
        }
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let tC =
          ((tm = class extends tx {
            constructor(t) {
              var e;
              if (
                (super(t),
                t.type !== ty.ATTRIBUTE ||
                  "class" !== t.name ||
                  (null === (e = t.strings) || void 0 === e
                    ? void 0
                    : e.length) > 2)
              )
                throw Error(
                  "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
                );
            }
            render(t) {
              return (
                " " +
                Object.keys(t)
                  .filter((e) => t[e])
                  .join(" ") +
                " "
              );
            }
            update(t, [e]) {
              var r, i;
              if (void 0 === this.it) {
                for (let i in ((this.it = new Set()),
                void 0 !== t.strings &&
                  (this.nt = new Set(
                    t.strings
                      .join(" ")
                      .split(/\s/)
                      .filter((t) => "" !== t)
                  )),
                e))
                  !e[i] ||
                    (null === (r = this.nt) || void 0 === r
                      ? void 0
                      : r.has(i)) ||
                    this.it.add(i);
                return this.render(e);
              }
              let o = t.element.classList;
              for (let t in (this.it.forEach((t) => {
                t in e || (o.remove(t), this.it.delete(t));
              }),
              e)) {
                let r = !!e[t];
                r === this.it.has(t) ||
                  (null === (i = this.nt) || void 0 === i
                    ? void 0
                    : i.has(t)) ||
                  (r
                    ? (o.add(t), this.it.add(t))
                    : (o.remove(t), this.it.delete(t)));
              }
              return z;
            }
          }),
          (...t) => ({ _$litDirective$: tm, values: t })),
        t$ = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        tA = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 },
        tE = () => {},
        tk = (t) => t;
      function tO(t, e = !0) {
        if (t && "finished" !== t.playState)
          try {
            t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
          } catch (t) {}
      }
      let tI = (t) => t(),
        t_ = (t, e, r = t$.duration) =>
          new Proxy(
            { animations: t.map(tI).filter(Boolean), duration: r, options: e },
            tP
          ),
        tT = (t) => t.animations[0],
        tP = {
          get: (t, e) => {
            let r = tT(t);
            switch (e) {
              case "duration":
                return t.duration;
              case "currentTime":
                return tA.s((null == r ? void 0 : r[e]) || 0);
              case "playbackRate":
              case "playState":
                return null == r ? void 0 : r[e];
              case "finished":
                return (
                  t.finished ||
                    (t.finished = Promise.all(t.animations.map(tM)).catch(tE)),
                  t.finished
                );
              case "stop":
                return () => {
                  t.animations.forEach((t) => tO(t));
                };
              case "forEachNative":
                return (e) => {
                  t.animations.forEach((r) => e(r, t));
                };
              default:
                return void 0 === (null == r ? void 0 : r[e])
                  ? void 0
                  : () => t.animations.forEach((t) => t[e]());
            }
          },
          set: (t, e, r) => {
            switch (e) {
              case "currentTime":
                r = tA.ms(r);
              case "currentTime":
              case "playbackRate":
                for (let i = 0; i < t.animations.length; i++)
                  t.animations[i][e] = r;
                return !0;
            }
            return !1;
          },
        },
        tM = (t) => t.finished,
        tN = (t) => "object" == typeof t && !!t.createAnimation,
        tj = (t) => "number" == typeof t,
        tR = (t) => Array.isArray(t) && !tj(t[0]),
        tL = (t, e, r) => -r * t + r * e + t,
        tS = (t, e, r) => (e - t == 0 ? 1 : (r - t) / (e - t));
      function tW(t, e) {
        let r = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          let o = tS(0, e, i);
          t.push(tL(r, 1, o));
        }
      }
      let tD = (t, e, r) => {
          let i = e - t;
          return ((((r - t) % i) + i) % i) + t;
        },
        tB = (t, e, r) => Math.min(Math.max(r, t), e),
        tU = (t, e, r) =>
          (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function tH(t, e, r, i) {
        if (t === e && r === i) return tk;
        let o = (e) =>
          (function (t, e, r, i, o) {
            let n, a;
            let l = 0;
            do
              (n = tU((a = e + (r - e) / 2), i, o) - t) > 0 ? (r = a) : (e = a);
            while (Math.abs(n) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : tU(o(t), e, i));
      }
      let tz =
          (t, e = "end") =>
          (r) => {
            r = "end" === e ? Math.min(r, 0.999) : Math.max(r, 0.001);
            let i = r * t,
              o = "end" === e ? Math.floor(i) : Math.ceil(i);
            return tB(0, 1, o / t);
          },
        tZ = (t) => "function" == typeof t,
        tV = (t) => Array.isArray(t) && tj(t[0]),
        tF = {
          ease: tH(0.25, 0.1, 0.25, 1),
          "ease-in": tH(0.42, 0, 1, 1),
          "ease-in-out": tH(0.42, 0, 0.58, 1),
          "ease-out": tH(0, 0, 0.58, 1),
        },
        tG = /\((.*?)\)/;
      function tq(t) {
        if (tZ(t)) return t;
        if (tV(t)) return tH(...t);
        if (tF[t]) return tF[t];
        if (t.startsWith("steps")) {
          let e = tG.exec(t);
          if (e) {
            let t = e[1].split(",");
            return tz(parseFloat(t[0]), t[1].trim());
          }
        }
        return tk;
      }
      class tK {
        constructor(
          t,
          e = [0, 1],
          {
            easing: r,
            duration: i = t$.duration,
            delay: o = t$.delay,
            endDelay: n = t$.endDelay,
            repeat: a = t$.repeat,
            offset: l,
            direction: s = "normal",
          } = {}
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = tk),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            })),
            tN((r = r || t$.easing)))
          ) {
            let t = r.createAnimation(e);
            (r = t.easing), (e = t.keyframes || e), (i = t.duration || i);
          }
          (this.repeat = a),
            (this.easing = tR(r) ? tk : tq(r)),
            this.updateDuration(i);
          let c = (function (
            t,
            e = (function (t) {
              let e = [0];
              return tW(e, t - 1), e;
            })(t.length),
            r = tk
          ) {
            let i = t.length,
              o = i - e.length;
            return (
              o > 0 && tW(e, o),
              (o) => {
                var n;
                let a = 0;
                for (; a < i - 2 && !(o < e[a + 1]); a++);
                let l = tB(0, 1, tS(e[a], e[a + 1], o)),
                  s = ((n = a), tR(r) ? r[tD(0, r.length, n)] : r);
                return (l = s(l)), tL(t[a], t[a + 1], l);
              }
            );
          })(e, l, tR(r) ? r.map(tq) : tk);
          (this.tick = (e) => {
            var r;
            let i = 0;
            (i =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (e - this.startTime) * this.rate),
              (this.t = i),
              (i /= 1e3),
              (i = Math.max(i - o, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (i = this.totalDuration);
            let a = i / this.duration,
              l = Math.floor(a),
              d = a % 1;
            !d && a >= 1 && (d = 1), 1 === d && l--;
            let h = l % 2;
            ("reverse" === s ||
              ("alternate" === s && h) ||
              ("alternate-reverse" === s && !h)) &&
              (d = 1 - d);
            let m = i >= this.totalDuration ? 1 : Math.min(d, 1),
              u = c(this.easing(m));
            t(u);
            let p =
              void 0 === this.pauseTime &&
              ("finished" === this.playState || i >= this.totalDuration + n);
            p
              ? ((this.playState = "finished"),
                null === (r = this.resolve) || void 0 === r || r.call(this, u))
              : "idle" !== this.playState &&
                (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            this.play();
        }
        play() {
          let t = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = t - this.pauseTime)
              : this.startTime || (this.startTime = t),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var t;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (t = this.reject) || void 0 === t || t.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(t) {
          (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(t) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = t)
            : (this.startTime = performance.now() - t / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(t) {
          this.rate = t;
        }
      }
      var tY = function () {};
      class tQ {
        setAnimation(t) {
          (this.animation = t),
            null == t ||
              t.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      let tJ = new WeakMap();
      function tX(t) {
        return (
          tJ.has(t) || tJ.set(t, { transforms: [], values: new Map() }),
          tJ.get(t)
        );
      }
      let t0 = ["", "X", "Y", "Z"],
        t1 = { x: "translateX", y: "translateY", z: "translateZ" },
        t3 = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (t) => t + "deg",
        },
        t2 = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (t) => t + "px",
          },
          rotate: t3,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: tk },
          skew: t3,
        },
        t5 = new Map(),
        t4 = (t) => `--motion-${t}`,
        t6 = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((t) => {
        t0.forEach((e) => {
          t6.push(t + e), t5.set(t4(t + e), t2[t]);
        });
      });
      let t7 = (t, e) => t6.indexOf(t) - t6.indexOf(e),
        t8 = new Set(t6),
        t9 = (t) => t8.has(t),
        et = (t, e) => {
          var r;
          t1[e] && (e = t1[e]);
          let { transforms: i } = tX(t);
          (r = e),
            -1 === i.indexOf(r) && i.push(r),
            (t.style.transform = ee(i));
        },
        ee = (t) => t.sort(t7).reduce(er, "").trim(),
        er = (t, e) => `${t} ${e}(var(${t4(e)}))`,
        ei = (t) => t.startsWith("--"),
        eo = new Set(),
        en = (t, e) => document.createElement("div").animate(t, e),
        ea = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              en({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            !!en({ opacity: [0, 1] }, { duration: 0.001 }).finished,
          linearEasing: () => {
            try {
              en({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        el = {},
        es = {};
      for (let t in ea)
        es[t] = () => (void 0 === el[t] && (el[t] = ea[t]()), el[t]);
      let ec = (t, e) => {
          let r = "",
            i = Math.round(e / 0.015);
          for (let e = 0; e < i; e++) r += t(tS(0, i - 1, e)) + ", ";
          return r.substring(0, r.length - 2);
        },
        ed = (t, e) =>
          tZ(t)
            ? es.linearEasing()
              ? `linear(${ec(t, e)})`
              : t$.easing
            : tV(t)
            ? eh(t)
            : t,
        eh = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
        em = (t) => (Array.isArray(t) ? t : [t]);
      function eu(t) {
        return t1[t] && (t = t1[t]), t9(t) ? t4(t) : t;
      }
      let ep = {
          get: (t, e) => {
            let r = ei((e = eu(e)))
              ? t.style.getPropertyValue(e)
              : getComputedStyle(t)[e];
            if (!r && 0 !== r) {
              let t = t5.get(e);
              t && (r = t.initialValue);
            }
            return r;
          },
          set: (t, e, r) => {
            ei((e = eu(e))) ? t.style.setProperty(e, r) : (t.style[e] = r);
          },
        },
        eg = (t) => "string" == typeof t,
        ew = (t, e) =>
          t[e]
            ? Object.assign(Object.assign({}, t), t[e])
            : Object.assign({}, t),
        ef = function (t, e, r = {}) {
          var i, o, n, a, l;
          "string" == typeof (i = t)
            ? o
              ? ((null !== (n = o[i]) && void 0 !== n) ||
                  (o[i] = document.querySelectorAll(i)),
                (i = o[i]))
              : (i = document.querySelectorAll(i))
            : i instanceof Element && (i = [i]),
            (t = Array.from(i || []));
          let s = t.length;
          tY(!!s, "No valid element provided."),
            tY(!!e, "No keyframes defined.");
          let c = [];
          for (let i = 0; i < s; i++) {
            let o = t[i];
            for (let t in e) {
              let n = ew(r, t);
              n.delay = ((a = n.delay), (l = i), tZ(a) ? a(l, s) : a);
              let d = (function (t, e, r, i = {}, o) {
                var n;
                let a;
                let l = window.__MOTION_DEV_TOOLS_RECORD,
                  s = !1 !== i.record && l,
                  {
                    duration: c = t$.duration,
                    delay: d = t$.delay,
                    endDelay: h = t$.endDelay,
                    repeat: m = t$.repeat,
                    easing: u = t$.easing,
                    persist: p = !1,
                    direction: g,
                    offset: w,
                    allowWebkitAcceleration: f = !1,
                  } = i,
                  v = tX(t),
                  b = t9(e),
                  y = es.waapi();
                b && et(t, e);
                let x = eu(e),
                  C = ((n = v.values).has(x) || n.set(x, new tQ()), n.get(x)),
                  $ = t5.get(x);
                return (
                  tO(C.animation, !(tN(u) && C.generator) && !1 !== i.record),
                  () => {
                    let n = () => {
                        var e, r;
                        return null !==
                          (r =
                            null !== (e = ep.get(t, x)) && void 0 !== e
                              ? e
                              : null == $
                              ? void 0
                              : $.initialValue) && void 0 !== r
                          ? r
                          : 0;
                      },
                      v = (function (t, e) {
                        for (let r = 0; r < t.length; r++)
                          null === t[r] && (t[r] = r ? t[r - 1] : e());
                        return t;
                      })(em(r), n),
                      A = (function (t, e) {
                        var r;
                        let i = (null == e ? void 0 : e.toDefaultUnit) || tk,
                          o = t[t.length - 1];
                        if (eg(o)) {
                          let t =
                            (null === (r = o.match(/(-?[\d.]+)([a-z%]*)/)) ||
                            void 0 === r
                              ? void 0
                              : r[2]) || "";
                          t && (i = (e) => e + t);
                        }
                        return i;
                      })(v, $);
                    if (tN(u)) {
                      let t = u.createAnimation(v, "opacity" !== e, n, x, C);
                      (u = t.easing),
                        (v = t.keyframes || v),
                        (c = t.duration || c);
                    }
                    if (
                      (ei(x) &&
                        (es.cssRegisterProperty()
                          ? (function (t) {
                              if (!eo.has(t)) {
                                eo.add(t);
                                try {
                                  let { syntax: e, initialValue: r } = t5.has(t)
                                    ? t5.get(t)
                                    : {};
                                  CSS.registerProperty({
                                    name: t,
                                    inherits: !1,
                                    syntax: e,
                                    initialValue: r,
                                  });
                                } catch (t) {}
                              }
                            })(x)
                          : (y = !1)),
                      b &&
                        !es.linearEasing() &&
                        (tZ(u) || (tR(u) && u.some(tZ))) &&
                        (y = !1),
                      y)
                    ) {
                      $ && (v = v.map((t) => (tj(t) ? $.toDefaultUnit(t) : t))),
                        1 === v.length &&
                          (!es.partialKeyframes() || s) &&
                          v.unshift(n());
                      let e = {
                        delay: tA.ms(d),
                        duration: tA.ms(c),
                        endDelay: tA.ms(h),
                        easing: tR(u) ? void 0 : ed(u, c),
                        direction: g,
                        iterations: m + 1,
                        fill: "both",
                      };
                      (a = t.animate(
                        {
                          [x]: v,
                          offset: w,
                          easing: tR(u) ? u.map((t) => ed(t, c)) : void 0,
                        },
                        e
                      )).finished ||
                        (a.finished = new Promise((t, e) => {
                          (a.onfinish = t), (a.oncancel = e);
                        }));
                      let r = v[v.length - 1];
                      a.finished
                        .then(() => {
                          p || (ep.set(t, x, r), a.cancel());
                        })
                        .catch(tE),
                        f || (a.playbackRate = 1.000001);
                    } else if (o && b)
                      1 ===
                        (v = v.map((t) =>
                          "string" == typeof t ? parseFloat(t) : t
                        )).length && v.unshift(parseFloat(n())),
                        (a = new o(
                          (e) => {
                            ep.set(t, x, A ? A(e) : e);
                          },
                          v,
                          Object.assign(Object.assign({}, i), {
                            duration: c,
                            easing: u,
                          })
                        ));
                    else {
                      let e = v[v.length - 1];
                      ep.set(t, x, $ && tj(e) ? $.toDefaultUnit(e) : e);
                    }
                    return (
                      s &&
                        l(
                          t,
                          e,
                          v,
                          {
                            duration: c,
                            delay: d,
                            easing: u,
                            repeat: m,
                            offset: w,
                          },
                          "motion-one"
                        ),
                      C.setAnimation(a),
                      a
                    );
                  }
                );
              })(o, t, e[t], n, tK);
              c.push(d);
            }
          }
          return t_(c, r, r.duration);
        };
      function ev(t, e = {}) {
        return t_(
          [
            () => {
              let r = new tK(t, [0, 1], e);
              return r.finished.catch(() => {}), r;
            },
          ],
          e,
          e.duration
        );
      }
      function eb(t, e, r) {
        let i = tZ(t) ? ev : ef;
        return i(t, e, r);
      }
      var ey = r(92592),
        ex = Object.defineProperty,
        eC = Object.getOwnPropertySymbols,
        e$ = Object.prototype.hasOwnProperty,
        eA = Object.prototype.propertyIsEnumerable,
        eE = (t, e, r) =>
          e in t
            ? ex(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        ek = (t, e) => {
          for (var r in e || (e = {})) e$.call(e, r) && eE(t, r, e[r]);
          if (eC) for (var r of eC(e)) eA.call(e, r) && eE(t, r, e[r]);
          return t;
        };
      function eO() {
        return {
          "--w3m-accent-color": "#3396FF",
          "--w3m-accent-fill-color": "#FFFFFF",
          "--w3m-z-index": "89",
          "--w3m-background-color": "#3396FF",
          "--w3m-background-border-radius": "8px",
          "--w3m-container-border-radius": "30px",
          "--w3m-wallet-icon-border-radius": "15px",
          "--w3m-wallet-icon-large-border-radius": "30px",
          "--w3m-wallet-icon-small-border-radius": "7px",
          "--w3m-input-border-radius": "28px",
          "--w3m-button-border-radius": "10px",
          "--w3m-notification-border-radius": "36px",
          "--w3m-secondary-button-border-radius": "28px",
          "--w3m-icon-button-border-radius": "50%",
          "--w3m-button-hover-highlight-border-radius": "10px",
          "--w3m-text-big-bold-size": "20px",
          "--w3m-text-big-bold-weight": "600",
          "--w3m-text-big-bold-line-height": "24px",
          "--w3m-text-big-bold-letter-spacing": "-0.03em",
          "--w3m-text-big-bold-text-transform": "none",
          "--w3m-text-xsmall-bold-size": "10px",
          "--w3m-text-xsmall-bold-weight": "700",
          "--w3m-text-xsmall-bold-line-height": "12px",
          "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
          "--w3m-text-xsmall-bold-text-transform": "uppercase",
          "--w3m-text-xsmall-regular-size": "12px",
          "--w3m-text-xsmall-regular-weight": "600",
          "--w3m-text-xsmall-regular-line-height": "14px",
          "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
          "--w3m-text-xsmall-regular-text-transform": "none",
          "--w3m-text-small-thin-size": "14px",
          "--w3m-text-small-thin-weight": "500",
          "--w3m-text-small-thin-line-height": "16px",
          "--w3m-text-small-thin-letter-spacing": "-0.03em",
          "--w3m-text-small-thin-text-transform": "none",
          "--w3m-text-small-regular-size": "14px",
          "--w3m-text-small-regular-weight": "600",
          "--w3m-text-small-regular-line-height": "16px",
          "--w3m-text-small-regular-letter-spacing": "-0.03em",
          "--w3m-text-small-regular-text-transform": "none",
          "--w3m-text-medium-regular-size": "16px",
          "--w3m-text-medium-regular-weight": "600",
          "--w3m-text-medium-regular-line-height": "20px",
          "--w3m-text-medium-regular-letter-spacing": "-0.03em",
          "--w3m-text-medium-regular-text-transform": "none",
          "--w3m-font-family":
            "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
          "--w3m-success-color": "rgb(38,181,98)",
          "--w3m-error-color": "rgb(242, 90, 103)",
        };
      }
      let eI = {
          getPreset: (t) => eO()[t],
          setTheme() {
            let t = document.querySelector(":root"),
              { themeVariables: e } = tb.ThemeCtrl.state;
            if (t) {
              let r = ek(
                ek(
                  ek(
                    ek(
                      {},
                      (function () {
                        var t;
                        let e =
                            null != (t = tb.ThemeCtrl.state.themeMode)
                              ? t
                              : "dark",
                          r = {
                            light: {
                              foreground: {
                                1: "rgb(20,20,20)",
                                2: "rgb(121,134,134)",
                                3: "rgb(158,169,169)",
                              },
                              background: {
                                1: "rgb(255,255,255)",
                                2: "rgb(241,243,243)",
                                3: "rgb(228,231,231)",
                              },
                              overlay: "rgba(0,0,0,0.1)",
                            },
                            dark: {
                              foreground: {
                                1: "rgb(228,231,231)",
                                2: "rgb(148,158,158)",
                                3: "rgb(110,119,119)",
                              },
                              background: {
                                1: "rgb(20,20,20)",
                                2: "rgb(39,42,42)",
                                3: "rgb(59,64,64)",
                              },
                              overlay: "rgba(255,255,255,0.1)",
                            },
                          }[e];
                        return {
                          "--w3m-color-fg-1": r.foreground[1],
                          "--w3m-color-fg-2": r.foreground[2],
                          "--w3m-color-fg-3": r.foreground[3],
                          "--w3m-color-bg-1": r.background[1],
                          "--w3m-color-bg-2": r.background[2],
                          "--w3m-color-bg-3": r.background[3],
                          "--w3m-color-overlay": r.overlay,
                        };
                      })()
                    ),
                    eO()
                  ),
                  e
                ),
                (function () {
                  let { themeVariables: t } = tb.ThemeCtrl.state;
                  return {
                    "--w3m-background-image-url":
                      null != t && t["--w3m-background-image-url"]
                        ? `url(${t["--w3m-background-image-url"]})`
                        : "none",
                  };
                })()
              );
              Object.entries(r).forEach(([e, r]) => t.style.setProperty(e, r));
            }
          },
          globalCss: c`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`,
        },
        e_ = c`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
      var eT = Object.defineProperty,
        eP = Object.getOwnPropertyDescriptor,
        eM = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? eP(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && eT(e, r, n), n;
        };
      let eN = class extends ta {
        constructor() {
          super(...arguments),
            (this.icon = void 0),
            (this.label = ""),
            (this.onClick = () => null);
        }
        render() {
          return U`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
        }
      };
      (eN.styles = [eI.globalCss, e_]),
        eM([td()], eN.prototype, "icon", 2),
        eM([td()], eN.prototype, "label", 2),
        eM([td()], eN.prototype, "onClick", 2),
        (eN = eM([ts("w3m-box-button")], eN));
      let ej = c`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:active::after{background-color:var(--w3m-color-overlay)}.w3m-ghost,.w3m-ghost:active::after,.w3m-outline{background-color:transparent}.w3m-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}.w3m-ghost:hover::after{background-color:transparent}.w3m-ghost:hover{opacity:.5}}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
      var eR = Object.defineProperty,
        eL = Object.getOwnPropertyDescriptor,
        eS = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? eL(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && eR(e, r, n), n;
        };
      let eW = class extends ta {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          let t = {
              "w3m-icon-left": void 0 !== this.iconLeft,
              "w3m-icon-right": void 0 !== this.iconRight,
              "w3m-ghost": "ghost" === this.variant,
              "w3m-outline": "outline" === this.variant,
            },
            e = "inverse";
          return (
            "ghost" === this.variant && (e = "secondary"),
            "outline" === this.variant && (e = "accent"),
            U`<button class="${tC(t)}" ?disabled="${this.disabled}" @click="${
              this.onClick
            }">${
              this.iconLeft
            }<w3m-text variant="small-regular" color="${e}"><slot></slot></w3m-text>${
              this.iconRight
            }</button>`
          );
        }
      };
      (eW.styles = [eI.globalCss, ej]),
        eS([td()], eW.prototype, "disabled", 2),
        eS([td()], eW.prototype, "iconLeft", 2),
        eS([td()], eW.prototype, "iconRight", 2),
        eS([td()], eW.prototype, "onClick", 2),
        eS([td()], eW.prototype, "variant", 2),
        (eW = eS([ts("w3m-button")], eW));
      let eD = c`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:active::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}}`;
      var eB = Object.defineProperty,
        eU = Object.getOwnPropertyDescriptor,
        eH = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? eU(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && eB(e, r, n), n;
        };
      let ez = class extends ta {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          let t = { "w3m-secondary": "secondary" === this.variant };
          return U`<button ?disabled="${this.disabled}" class="${tC(
            t
          )}"><slot></slot></button>`;
        }
      };
      (ez.styles = [eI.globalCss, eD]),
        eH([td()], ez.prototype, "disabled", 2),
        eH([td()], ez.prototype, "variant", 2),
        (ez = eH([ts("w3m-button-big")], ez));
      let eZ = c`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      var eV = Object.defineProperty,
        eF = Object.getOwnPropertyDescriptor;
      let eG = class extends ta {
        render() {
          return U`<div><slot></slot></div>`;
        }
      };
      (eG.styles = [eI.globalCss, eZ]),
        (eG = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? eF(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && eV(e, r, n), n;
        })([ts("w3m-info-footer")], eG));
      let eq = {
          CROSS_ICON: H`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: H`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: H`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: H`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: H`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: H`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: H`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: H`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: H`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: H`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: H`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: H`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: H`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: H`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: H`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          HELP_ETH_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
          HELP_PAINTING_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
          HELP_CHART_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          HELP_KEY_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          HELP_USER_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
          HELP_LOCK_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
          HELP_COMPAS_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
          HELP_NOUN_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
          HELP_DAO_IMG: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          SEARCH_ICON: H`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          HELP_ICON: H`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
          WALLET_ICON: H`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
          NETWORK_PLACEHOLDER: H`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
          WALLET_PLACEHOLDER: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          TOKEN_PLACEHOLDER: H`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
          ACCOUNT_COPY: H`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
          ACCOUNT_DISCONNECT: H`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
          GLOBE_ICON: H`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        eK = c`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}@media(hover:hover){button:hover{background-color:var(--w3m-color-bg-2)}}`;
      var eY = Object.defineProperty,
        eQ = Object.getOwnPropertyDescriptor,
        eJ = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? eQ(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && eY(e, r, n), n;
        };
      let eX = class extends ta {
        constructor() {
          super(),
            (this.isHelp = !1),
            (this.unsubscribeRouter = void 0),
            (this.unsubscribeRouter = tb.AV.subscribe((t) => {
              this.isHelp = "Help" === t.view;
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeRouter) || t.call(this);
        }
        onHelp() {
          tb.AV.push("Help");
        }
        logoTemplate() {
          var t;
          let e =
            null == (t = tb.ThemeCtrl.state.themeVariables)
              ? void 0
              : t["--w3m-logo-image-url"];
          return e ? U`<img src="${e}">` : eq.WALLET_CONNECT_LOGO;
        }
        render() {
          let t = { "w3m-help-active": this.isHelp };
          return U`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${tC(
            t
          )}"><button @click="${this.onHelp}">${
            eq.HELP_ICON
          }</button> <button @click="${tb.jb.close}">${
            eq.CROSS_ICON
          }</button></div></div>`;
        }
      };
      (eX.styles = [eI.globalCss, eK]),
        eJ([th()], eX.prototype, "isHelp", 2),
        (eX = eJ([ts("w3m-modal-backcard")], eX));
      let e0 = c`main{padding:20px;padding-top:0;width:100%}`;
      var e1 = Object.defineProperty,
        e3 = Object.getOwnPropertyDescriptor;
      let e2 = class extends ta {
        render() {
          return U`<main><slot></slot></main>`;
        }
      };
      (e2.styles = [eI.globalCss, e0]),
        (e2 = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? e3(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && e1(e, r, n), n;
        })([ts("w3m-modal-content")], e2));
      let e5 = c`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
      var e4 = Object.defineProperty,
        e6 = Object.getOwnPropertyDescriptor;
      let e7 = class extends ta {
        render() {
          return U`<footer><slot></slot></footer>`;
        }
      };
      (e7.styles = [eI.globalCss, e5]),
        (e7 = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? e6(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && e4(e, r, n), n;
        })([ts("w3m-modal-footer")], e7));
      let e8 = c`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
      var e9 = Object.defineProperty,
        rt = Object.getOwnPropertyDescriptor,
        re = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rt(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && e9(e, r, n), n;
        };
      let rr = class extends ta {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return U`<button class="w3m-back-btn" @click="${tb.AV.goBack}">${eq.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return U`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          let t = { "w3m-border": this.border },
            e = tb.AV.state.history.length > 1,
            r = this.title
              ? U`<w3m-text variant="big-bold">${this.title}</w3m-text>`
              : U`<slot></slot>`;
          return U`<header class="${tC(t)}">${
            e ? this.backBtnTemplate() : null
          } ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (rr.styles = [eI.globalCss, e8]),
        re([td()], rr.prototype, "title", 2),
        re([td()], rr.prototype, "onAction", 2),
        re([td()], rr.prototype, "actionIcon", 2),
        re([td()], rr.prototype, "border", 2),
        (rr = re([ts("w3m-modal-header")], rr));
      let ri = {
          1: "692ed6ba-e569-459a-556a-776476829e00",
          42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
          43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
          56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
          250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
          10: "ab9c186a-c52f-464b-2906-ca59d760a400",
          137: "41d04d42-da3b-4453-8506-668cc0727900",
          100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
          9001: "f926ff41-260d-4028-635e-91913fc28e00",
          324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
          314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
          4689: "34e68754-e536-40da-c153-6ef2e7188a00",
          1088: "3897a66d-40b9-4833-162f-a2c90531c900",
          1284: "161038da-44ae-4ec7-1208-0ea569454b00",
          1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
        },
        ro = {
          ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" },
          FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" },
          BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" },
          MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" },
          OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" },
          xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" },
          EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" },
          METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" },
          IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" },
        },
        rn = {
          externalWallets() {
            let { isStandalone: t } = tb.OptionsCtrl.state;
            return t
              ? []
              : tb.Id.client()
                  .getConnectors()
                  .filter((t) => "injected" !== t.id);
          },
          manualWallets() {
            var t, e;
            let { mobileWallets: r, desktopWallets: i } = tb.ConfigCtrl.state,
              o = null == (t = rn.recentWallet()) ? void 0 : t.id,
              n = tb.zv.isMobile() ? r : i,
              a = n?.filter((t) => o !== t.id);
            return null !=
              (e = tb.zv.isMobile()
                ? a?.map(({ id: t, name: e, links: r }) => ({
                    id: t,
                    name: e,
                    mobile: r,
                    links: r,
                  }))
                : a?.map(({ id: t, name: e, links: r }) => ({
                    id: t,
                    name: e,
                    desktop: r,
                    links: r,
                  })))
              ? e
              : [];
          },
          installedInjectedWallets() {
            let { isStandalone: t } = tb.OptionsCtrl.state;
            if (t || !tb.Id.client().isInjectedProviderInstalled()) return [];
            let { namespace: e } = tb.Id.client(),
              { injectedWallets: r } = tb.ExplorerCtrl.state,
              i = r.filter(
                ({ injected: t }) =>
                  !!t.some(
                    (t) =>
                      tb.Id.client().safeCheckInjectedProvider(t.injected_id) &&
                      t.namespace === e
                  )
              );
            return (
              i.length > 1 &&
                (i = i.filter(
                  ({ injected: t }) =>
                    !!t
                      .map(({ injected_id: t }) => t)
                      .every((t) => "isMetaMask" !== t)
                )),
              i.length
                ? i
                : [{ name: "Browser", id: "browser", image_id: void 0 }]
            );
          },
          injectedWallets() {
            let { isStandalone: t } = tb.OptionsCtrl.state,
              {
                explorerExcludedWalletIds: e,
                explorerRecommendedWalletIds: r,
              } = tb.ConfigCtrl.state,
              i = tb.zv.isMobile();
            if (t || "ALL" === e || i) return [];
            let { namespace: o } = tb.Id.client(),
              { injectedWallets: n } = tb.ExplorerCtrl.state;
            return n.filter(({ id: t, injected: i }) => {
              let n = tb.zv.isArray(e) ? e : [],
                a = tb.zv.isArray(r) ? r : [];
              return !!i.some(
                (e) => e.namespace === o && !n.includes(t) && !a.includes(t)
              );
            });
          },
          recentWallet: () => ra.getRecentWallet(),
          recomendedWallets(t = !1) {
            var e;
            let r = rn.installedInjectedWallets().map(({ id: t }) => t),
              i = t || null == (e = rn.recentWallet()) ? void 0 : e.id,
              o = [...r, i],
              { recomendedWallets: n } = tb.ExplorerCtrl.state;
            return n.filter((t) => !o.includes(t.id));
          },
        },
        ra = {
          MOBILE_BREAKPOINT: 600,
          W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          rejectStandaloneButtonComponent() {
            let { isStandalone: t } = tb.OptionsCtrl.state;
            if (t)
              throw Error(
                "Web3Modal button components are not available in standalone mode."
              );
          },
          getShadowRootElement(t, e) {
            let r = t.renderRoot.querySelector(e);
            if (!r) throw Error(`${e} not found`);
            return r;
          },
          getWalletIcon({ id: t, image_id: e }) {
            let { walletImages: r } = tb.ConfigCtrl.state;
            return null != r && r[t]
              ? r[t]
              : e
              ? tb.ExplorerCtrl.getWalletImageUrl(e)
              : "";
          },
          getWalletName: (t, e = !1) => (e ? t.split(" ")[0] : t),
          getChainIcon(t) {
            var e;
            let r = ri[t],
              { projectId: i, chainImages: o } = tb.ConfigCtrl.state;
            return null != (e = o?.[t])
              ? e
              : i && r
              ? tb.ExplorerCtrl.getAssetImageUrl(r)
              : "";
          },
          getTokenIcon(t) {
            var e, r;
            let i = null == (e = ro[t]) ? void 0 : e.icon,
              { projectId: o, tokenImages: n } = tb.ConfigCtrl.state;
            return null != (r = n?.[t])
              ? r
              : o && i
              ? tb.ExplorerCtrl.getAssetImageUrl(i)
              : "";
          },
          isMobileAnimation: () => window.innerWidth <= ra.MOBILE_BREAKPOINT,
          async preloadImage(t) {
            let e = new Promise((e, r) => {
              let i = new Image();
              (i.onload = e), (i.onerror = r), (i.src = t);
            });
            return Promise.race([e, tb.zv.wait(3e3)]);
          },
          getErrorMessage: (t) =>
            t instanceof Error ? t.message : "Unknown Error",
          debounce(t, e = 500) {
            let r;
            return (...i) => {
              r && clearTimeout(r),
                (r = setTimeout(function () {
                  t(...i);
                }, e));
            };
          },
          handleMobileLinking(t) {
            var e;
            let r;
            let { standaloneUri: i } = tb.OptionsCtrl.state,
              { pairingUri: o } = tb.WcConnectionCtrl.state,
              { mobile: n, name: a } = t,
              l = n?.native,
              s = n?.universal;
            ra.setRecentWallet(t),
              (e = i || o),
              (r = ""),
              l
                ? (r = tb.zv.formatUniversalUrl(l, e, a))
                : s && (r = tb.zv.formatNativeUrl(s, e, a)),
              tb.zv.openHref(r, "_self");
          },
          handleAndroidLinking() {
            let { standaloneUri: t } = tb.OptionsCtrl.state,
              { pairingUri: e } = tb.WcConnectionCtrl.state;
            t
              ? (tb.zv.setWalletConnectAndroidDeepLink(t),
                tb.zv.openHref(t, "_self"))
              : (tb.zv.setWalletConnectAndroidDeepLink(e),
                tb.zv.openHref(e, "_self"));
          },
          async handleUriCopy() {
            let { standaloneUri: t } = tb.OptionsCtrl.state,
              { pairingUri: e } = tb.WcConnectionCtrl.state;
            t
              ? await navigator.clipboard.writeText(t)
              : await navigator.clipboard.writeText(e),
              tb.ToastCtrl.openToast("Link copied", "success");
          },
          async handleConnectorConnection(t, e) {
            try {
              let { selectedChain: e } = tb.OptionsCtrl.state;
              await tb.Id.client().connectConnector(t, e?.id), tb.jb.close();
            } catch (t) {
              console.error(t),
                e
                  ? e()
                  : tb.ToastCtrl.openToast(ra.getErrorMessage(t), "error");
            }
          },
          getCustomImageUrls() {
            let { chainImages: t, walletImages: e } = tb.ConfigCtrl.state,
              r = Object.values(t ?? {}),
              i = Object.values(e ?? {});
            return Object.values([...r, ...i]);
          },
          truncate: (t, e = 8) =>
            t.length <= e
              ? t
              : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`,
          generateAvatarColors(t) {
            var e;
            let r = null == (e = t.match(/.{1,7}/g)) ? void 0 : e.splice(0, 5),
              i = [];
            r?.forEach((t) => {
              let e = 0;
              for (let r = 0; r < t.length; r += 1)
                (e = t.charCodeAt(r) + ((e << 5) - e)), (e &= e);
              let r = [0, 0, 0];
              for (let t = 0; t < 3; t += 1) {
                let i = (e >> (8 * t)) & 255;
                r[t] = i;
              }
              i.push(`rgb(${r[0]}, ${r[1]}, ${r[2]})`);
            });
            let o = document.querySelector(":root");
            if (o) {
              let t = {
                "--w3m-color-av-1": i[0],
                "--w3m-color-av-2": i[1],
                "--w3m-color-av-3": i[2],
                "--w3m-color-av-4": i[3],
                "--w3m-color-av-5": i[4],
              };
              Object.entries(t).forEach(([t, e]) => o.style.setProperty(t, e));
            }
          },
          setRecentWallet(t) {
            let { walletConnectVersion: e } = tb.OptionsCtrl.state;
            localStorage.setItem(
              ra.W3M_RECENT_WALLET_DATA,
              JSON.stringify({ [e]: t })
            );
          },
          getRecentWallet() {
            let t = localStorage.getItem(ra.W3M_RECENT_WALLET_DATA);
            if (t) {
              let { walletConnectVersion: e } = tb.OptionsCtrl.state,
                r = JSON.parse(t);
              if (r[e]) return r[e];
            }
          },
          caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
          openWalletExplorerUrl() {
            tb.zv.openHref(ra.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            let {
                id: t,
                desktop: e,
                mobile: r,
                injected: i,
              } = tb.zv.getWalletRouterData(),
              o = rn.installedInjectedWallets(),
              n = !!(null != i && i.length),
              a = o.some((e) => e.id === t),
              l = !!(null != e && e.native),
              s = !!(null != e && e.universal),
              c = !!(null != r && r.native) || !!(null != r && r.universal);
            return {
              isInjectedInstalled: a,
              isInjected: n,
              isDesktop: l,
              isMobile: c,
              isWeb: s,
            };
          },
          goToConnectingView(t) {
            tb.AV.setData({ Wallet: t });
            let e = tb.zv.isMobile(),
              {
                isDesktop: r,
                isWeb: i,
                isMobile: o,
                isInjectedInstalled: n,
              } = ra.getCachedRouterWalletPlatforms();
            e
              ? n
                ? tb.AV.push("InjectedConnecting")
                : o
                ? tb.AV.push("MobileConnecting")
                : i
                ? tb.AV.push("WebConnecting")
                : tb.AV.push("InstallWallet")
              : n
              ? tb.AV.push("InjectedConnecting")
              : r
              ? tb.AV.push("DesktopConnecting")
              : i
              ? tb.AV.push("WebConnecting")
              : o
              ? tb.AV.push("MobileQrcodeConnecting")
              : tb.AV.push("InstallWallet");
          },
        },
        rl = c`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
      var rs = Object.defineProperty,
        rc = Object.getOwnPropertyDescriptor,
        rd = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rc(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rs(e, r, n), n;
        };
      let rh = class extends ta {
        constructor() {
          super(),
            (this.view = tb.AV.state.view),
            (this.prevView = tb.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = tb.AV.subscribe((t) => {
              this.view !== t.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([t]) => {
            let e = `${t.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              eb(
                this.routerEl,
                { height: [this.oldHeight, e] },
                { duration: 0.2 }
              ),
              (this.oldHeight = e);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var t, e;
          null == (t = this.unsubscribe) || t.call(this),
            null == (e = this.resizeObserver) || e.disconnect();
        }
        get routerEl() {
          return ra.getShadowRootElement(this, ".w3m-router");
        }
        get contentEl() {
          return ra.getShadowRootElement(this, ".w3m-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return U`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
            case "SelectNetwork":
              return U`<w3m-select-network-view></w3m-select-network-view>`;
            case "InjectedConnecting":
              return U`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
            case "DesktopConnecting":
              return U`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
            case "MobileConnecting":
              return U`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
            case "WebConnecting":
              return U`<w3m-web-connecting-view></w3m-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return U`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
            case "GetWallet":
              return U`<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case "WalletExplorer":
              return U`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
            case "Qrcode":
              return U`<w3m-qrcode-view></w3m-qrcode-view>`;
            case "Help":
              return U`<w3m-help-view></w3m-help-view>`;
            case "Account":
              return U`<w3m-account-view></w3m-account-view>`;
            case "SwitchNetwork":
              return U`<w3m-switch-network-view></w3m-switch-network-view>`;
            case "InstallWallet":
              return U`<w3m-install-wallet-view></w3m-install-wallet-view>`;
            default:
              return U`<div>Not Found</div>`;
          }
        }
        async onChangeRoute() {
          await eb(
            this.routerEl,
            { opacity: [1, 0], scale: [1, 1.02] },
            { duration: 0.15, delay: 0.1 }
          ).finished,
            (this.view = tb.AV.state.view),
            eb(
              this.routerEl,
              { opacity: [0, 1], scale: [0.99, 1] },
              { duration: 0.37, delay: 0.05 }
            );
        }
        render() {
          return U`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (rh.styles = [eI.globalCss, rl]),
        rd([th()], rh.prototype, "view", 2),
        rd([th()], rh.prototype, "prevView", 2),
        (rh = rd([ts("w3m-modal-router")], rh));
      let rm = c`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
      var ru = Object.defineProperty,
        rp = Object.getOwnPropertyDescriptor,
        rg = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rp(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ru(e, r, n), n;
        };
      let rw = class extends ta {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = tb.ToastCtrl.subscribe((t) => {
              t.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(
                    () => tb.ToastCtrl.closeToast(),
                    2200
                  )))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribe) || t.call(this),
            clearTimeout(this.timeout),
            tb.ToastCtrl.closeToast();
        }
        render() {
          let { message: t, variant: e } = tb.ToastCtrl.state;
          return this.open
            ? U`<div class="${tC({
                "w3m-success": "success" === e,
                "w3m-error": "error" === e,
              })}">${"success" === e ? eq.CHECKMARK_ICON : null} ${
                "error" === e ? eq.CROSS_ICON : null
              }<w3m-text variant="small-regular">${t}</w3m-text></div>`
            : null;
        }
      };
      (rw.styles = [eI.globalCss, rm]),
        rg([th()], rw.prototype, "open", 2),
        (rw = rg([ts("w3m-modal-toast")], rw));
      let rf = c`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px;position:relative}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:active{background-color:var(--w3m-color-overlay)}.w3m-unsupported{opacity:.3}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}`;
      var rv = Object.defineProperty,
        rb = Object.getOwnPropertyDescriptor,
        ry = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rb(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rv(e, r, n), n;
        };
      let rx = class extends ta {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.chainId = ""),
            (this.unsupported = !1);
        }
        render() {
          let t = { "w3m-unsupported": this.unsupported };
          return U`<button @click="${this.onClick}" class="${tC(
            t
          )}"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="xsmall-regular">${
            this.name
          }</w3m-text></button>`;
        }
      };
      (rx.styles = [eI.globalCss, rf]),
        ry([td()], rx.prototype, "onClick", 2),
        ry([td()], rx.prototype, "name", 2),
        ry([td()], rx.prototype, "chainId", 2),
        ry([td()], rx.prototype, "unsupported", 2),
        (rx = ry([ts("w3m-network-button")], rx));
      let rC = c`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
      var r$ = Object.defineProperty,
        rA = Object.getOwnPropertyDescriptor,
        rE = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rA(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && r$(e, r, n), n;
        };
      let rk = class extends ta {
        constructor() {
          super(...arguments), (this.chainId = "");
        }
        render() {
          let t = ra.getChainIcon(this.chainId);
          return t
            ? U`<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${t}"/><image href="${t}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>`
            : U`${eq.NETWORK_PLACEHOLDER}`;
        }
      };
      function rO(t, e, r) {
        return t !== e && (t - e < 0 ? e - t : t - e) <= r + 0.1;
      }
      (rk.styles = [eI.globalCss, rC]),
        rE([td()], rk.prototype, "chainId", 2),
        (rk = rE([ts("w3m-network-image")], rk));
      let rI = {
          generate(t, e, r, i) {
            let o = "light" === i ? "#141414" : "#fff",
              n = "light" === i ? "#fff" : "#141414",
              a = [],
              l = (function (t, e) {
                let r = Array.prototype.slice.call(
                    ey.create(t, { errorCorrectionLevel: "Q" }).modules.data,
                    0
                  ),
                  i = Math.sqrt(r.length);
                return r.reduce(
                  (t, e, r) =>
                    (r % i == 0 ? t.push([e]) : t[t.length - 1].push(e)) && t,
                  []
                );
              })(t, 0),
              s = e / l.length,
              c = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            c.forEach(({ x: t, y: e }) => {
              let r = (l.length - 7) * s * t,
                i = (l.length - 7) * s * e;
              for (let t = 0; t < c.length; t += 1) {
                let e = s * (7 - 2 * t);
                a.push(
                  H`<rect fill="${t % 2 == 0 ? o : n}" height="${e}" rx="${
                    0.32 * e
                  }" ry="${0.32 * e}" width="${e}" x="${r + s * t}" y="${
                    i + s * t
                  }">`
                );
              }
            });
            let d = Math.floor((r + 25) / s),
              h = l.length / 2 - d / 2,
              m = l.length / 2 + d / 2 - 1,
              u = [];
            l.forEach((t, e) => {
              t.forEach((t, r) => {
                if (
                  l[e][r] &&
                  !(
                    (e < 7 && r < 7) ||
                    (e > l.length - 8 && r < 7) ||
                    (e < 7 && r > l.length - 8)
                  ) &&
                  !(e > h && e < m && r > h && r < m)
                ) {
                  let t = e * s + s / 2,
                    i = r * s + s / 2;
                  u.push([t, i]);
                }
              });
            });
            let p = {};
            return (
              u.forEach(([t, e]) => {
                p[t] ? p[t].push(e) : (p[t] = [e]);
              }),
              Object.entries(p)
                .map(([t, e]) => {
                  let r = e.filter((t) => e.every((e) => !rO(t, e, s)));
                  return [Number(t), r];
                })
                .forEach(([t, e]) => {
                  e.forEach((e) => {
                    a.push(
                      H`<circle cx="${t}" cy="${e}" fill="${o}" r="${s / 2.5}">`
                    );
                  });
                }),
              Object.entries(p)
                .filter(([t, e]) => e.length > 1)
                .map(([t, e]) => {
                  let r = e.filter((t) => e.some((e) => rO(t, e, s)));
                  return [Number(t), r];
                })
                .map(([t, e]) => {
                  e.sort((t, e) => (t < e ? -1 : 1));
                  let r = [];
                  for (let t of e) {
                    let e = r.find((e) => e.some((e) => rO(t, e, s)));
                    e ? e.push(t) : r.push([t]);
                  }
                  return [t, r.map((t) => [t[0], t[t.length - 1]])];
                })
                .forEach(([t, e]) => {
                  e.forEach(([e, r]) => {
                    a.push(
                      H`<line x1="${t}" x2="${t}" y1="${e}" y2="${r}" stroke="${o}" stroke-width="${
                        s / 1.25
                      }" stroke-linecap="round">`
                    );
                  });
                }),
              a
            );
          },
        },
        r_ = c`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
      var rT = Object.defineProperty,
        rP = Object.getOwnPropertyDescriptor,
        rM = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rP(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rT(e, r, n), n;
        };
      let rN = class extends ta {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          var t;
          let e = null != (t = tb.ThemeCtrl.state.themeMode) ? t : "light";
          return H`<svg height="${this.size}" width="${
            this.size
          }">${rI.generate(this.uri, this.size, this.size / 4, e)}</svg>`;
        }
        render() {
          return U`<div>${
            this.walletId || this.imageUrl
              ? U`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>`
              : eq.WALLET_CONNECT_ICON_COLORED
          } ${this.svgTemplate()}<w3m-theme-context></w3m-theme-context></div>`;
        }
      };
      (rN.styles = [eI.globalCss, r_]),
        rM([td()], rN.prototype, "uri", 2),
        rM([td({ type: Number })], rN.prototype, "size", 2),
        rM([td()], rN.prototype, "imageId", 2),
        rM([td()], rN.prototype, "walletId", 2),
        rM([td()], rN.prototype, "imageUrl", 2),
        (rN = rM([ts("w3m-qrcode")], rN));
      let rj = c`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--w3m-color-fg-1);background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);caret-color:var(--w3m-accent-color)}input::placeholder{color:var(--w3m-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
      var rR = Object.defineProperty,
        rL = Object.getOwnPropertyDescriptor,
        rS = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rL(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rR(e, r, n), n;
        };
      let rW = class extends ta {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          return U`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${eq.SEARCH_ICON}`;
        }
      };
      (rW.styles = [eI.globalCss, rj]),
        rS([td()], rW.prototype, "onChange", 2),
        (rW = rS([ts("w3m-search-input")], rW));
      let rD = c`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
      var rB = Object.defineProperty,
        rU = Object.getOwnPropertyDescriptor;
      let rH = class extends ta {
        render() {
          return U`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (rH.styles = [eI.globalCss, rD]),
        (rH = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rU(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rB(e, r, n), n;
        })([ts("w3m-spinner")], rH));
      let rz = c`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
      var rZ = Object.defineProperty,
        rV = Object.getOwnPropertyDescriptor,
        rF = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rV(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rZ(e, r, n), n;
        };
      let rG = class extends ta {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          let t = {
            "w3m-big-bold": "big-bold" === this.variant,
            "w3m-medium-regular": "medium-regular" === this.variant,
            "w3m-small-regular": "small-regular" === this.variant,
            "w3m-small-thin": "small-thin" === this.variant,
            "w3m-xsmall-regular": "xsmall-regular" === this.variant,
            "w3m-xsmall-bold": "xsmall-bold" === this.variant,
            "w3m-color-primary": "primary" === this.color,
            "w3m-color-secondary": "secondary" === this.color,
            "w3m-color-tertiary": "tertiary" === this.color,
            "w3m-color-inverse": "inverse" === this.color,
            "w3m-color-accnt": "accent" === this.color,
            "w3m-color-error": "error" === this.color,
          };
          return U`<span><slot class="${tC(t)}"></slot></span>`;
        }
      };
      (rG.styles = [eI.globalCss, rz]),
        rF([td()], rG.prototype, "variant", 2),
        rF([td()], rG.prototype, "color", 2),
        (rG = rF([ts("w3m-text")], rG));
      let rq = c`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var rK = Object.defineProperty,
        rY = Object.getOwnPropertyDescriptor,
        rQ = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? rY(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && rK(e, r, n), n;
        };
      let rJ = class extends ta {
        constructor() {
          super(...arguments), (this.symbol = void 0);
        }
        render() {
          var t;
          let e = ra.getTokenIcon(null != (t = this.symbol) ? t : "");
          return e
            ? U`<div><img src="${e}" alt="${this.id}"></div>`
            : eq.TOKEN_PLACEHOLDER;
        }
      };
      (rJ.styles = [eI.globalCss, rq]),
        rQ([td()], rJ.prototype, "symbol", 2),
        (rJ = rQ([ts("w3m-token-image")], rJ));
      let rX = c`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
      var r0 = Object.defineProperty,
        r1 = Object.getOwnPropertyDescriptor,
        r3 = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? r1(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && r0(e, r, n), n;
        };
      let r2 = class extends ta {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? U`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>`
            : this.installed
            ? U`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>`
            : null;
        }
        handleClick() {
          tb.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var t;
          return U`<button @click="${this.handleClick.bind(
            this
          )}"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${
            this.imageId
          }"></w3m-wallet-image><w3m-text variant="xsmall-regular">${
            null != (t = this.label) ? t : ra.getWalletName(this.name, !0)
          }</w3m-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (r2.styles = [eI.globalCss, rX]),
        r3([td()], r2.prototype, "onClick", 2),
        r3([td()], r2.prototype, "name", 2),
        r3([td()], r2.prototype, "walletId", 2),
        r3([td()], r2.prototype, "label", 2),
        r3([td()], r2.prototype, "imageId", 2),
        r3([td()], r2.prototype, "installed", 2),
        r3([td()], r2.prototype, "recent", 2),
        (r2 = r3([ts("w3m-wallet-button")], r2));
      let r5 = c`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var r4 = Object.defineProperty,
        r6 = Object.getOwnPropertyDescriptor,
        r7 = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? r6(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && r4(e, r, n), n;
        };
      let r8 = class extends ta {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var t;
          let e =
            null != (t = this.imageUrl) && t.length
              ? this.imageUrl
              : ra.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return U`${
            e.length
              ? U`<div><img src="${e}" alt="${this.id}"></div>`
              : eq.WALLET_PLACEHOLDER
          }`;
        }
      };
      (r8.styles = [eI.globalCss, r5]),
        r7([td()], r8.prototype, "walletId", 2),
        r7([td()], r8.prototype, "imageId", 2),
        r7([td()], r8.prototype, "imageUrl", 2),
        (r8 = r7([ts("w3m-wallet-image")], r8));
      var r9 = Object.defineProperty,
        it = Object.getOwnPropertyDescriptor;
      let ie = class extends ta {
        constructor() {
          super(),
            (this.unwatchAccount = void 0),
            tb.AccountCtrl.getAccount(),
            this.fetchProfile(),
            this.fetchBalance(),
            (this.unwatchAccount = tb.Id.client().watchAccount((t) => {
              let { address: e, isConnected: r } = tb.AccountCtrl.state;
              t.isConnected &&
                t.address !== e &&
                (this.fetchProfile(t.address),
                this.fetchBalance(t.address),
                tb.AccountCtrl.setAddress(t.address)),
                t.isConnected || tb.AccountCtrl.resetAccount(),
                r !== t.isConnected && tb.jb.close(),
                !r && t.isConnected
                  ? tb.uA.track({ name: "ACCOUNT_CONNECTED" })
                  : r &&
                    !t.isConnected &&
                    tb.uA.track({ name: "ACCOUNT_DISCONNECTED" }),
                tb.AccountCtrl.setIsConnected(t.isConnected);
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unwatchAccount) || t.call(this);
        }
        async fetchProfile(t) {
          var e;
          let r =
            null == (e = tb.OptionsCtrl.state.chains)
              ? void 0
              : e.find((t) => 1 === t.id);
          if (tb.ConfigCtrl.state.enableAccountView && r)
            try {
              await tb.AccountCtrl.fetchProfile(ra.preloadImage, t);
            } catch (t) {
              console.error(t),
                tb.ToastCtrl.openToast(ra.getErrorMessage(t), "error");
            }
        }
        async fetchBalance(t) {
          if (tb.ConfigCtrl.state.enableAccountView)
            try {
              await tb.AccountCtrl.fetchBalance(t);
            } catch (t) {
              console.error(t),
                tb.ToastCtrl.openToast(ra.getErrorMessage(t), "error");
            }
        }
      };
      ie = ((t, e, r, i) => {
        for (
          var o, n = i > 1 ? void 0 : i ? it(e, r) : e, a = t.length - 1;
          a >= 0;
          a--
        )
          (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
        return i && n && r9(e, r, n), n;
      })([ts("w3m-account-context")], ie);
      var ir = Object.defineProperty,
        ii = Object.getOwnPropertyDescriptor,
        io = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? ii(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ir(e, r, n), n;
        };
      let ia = class extends ta {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        async loadImages(t) {
          try {
            null != t &&
              t.length &&
              (await Promise.all(t.map(async (t) => ra.preloadImage(t))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images", t);
          }
        }
        async preloadListings() {
          var t;
          if (tb.ConfigCtrl.state.enableExplorer) {
            let { chains: e } = tb.OptionsCtrl.state;
            await Promise.all([
              tb.ExplorerCtrl.getRecomendedWallets(),
              tb.ExplorerCtrl.getInjectedWallets(),
            ]),
              tb.OptionsCtrl.setIsDataLoaded(!0);
            let { recomendedWallets: r } = tb.ExplorerCtrl.state,
              i = rn.installedInjectedWallets(),
              o = null != (t = e?.map((t) => ra.getChainIcon(t.id))) ? t : [],
              n = r.map((t) => ra.getWalletIcon(t)),
              a = i.map((t) => ra.getWalletIcon(t));
            await this.loadImages([...o, ...n, ...a]);
          } else tb.OptionsCtrl.setIsDataLoaded(!0);
        }
        async preloadCustomImages() {
          let t = ra.getCustomImageUrls();
          await this.loadImages(t);
        }
        async preloadData() {
          try {
            this.preload &&
              ((this.preload = !1),
              await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages(),
              ]));
          } catch (t) {
            console.error(t),
              tb.ToastCtrl.openToast("Failed preloading", "error");
          }
        }
      };
      io([th()], ia.prototype, "preload", 2),
        (ia = io([ts("w3m-explorer-context")], ia));
      var il = Object.defineProperty,
        is = Object.getOwnPropertyDescriptor,
        ic = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? is(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && il(e, r, n), n;
        };
      let id = class extends ta {
        constructor() {
          super(),
            (this.activeChainId = void 0),
            (this.unwatchNetwork = void 0);
          let t = tb.OptionsCtrl.getSelectedChain();
          (this.activeChainId = t?.id),
            (this.unwatchNetwork = tb.Id.client().watchNetwork((t) => {
              let e = t.chain;
              e &&
                this.activeChainId !== e.id &&
                (tb.OptionsCtrl.setSelectedChain(e),
                (this.activeChainId = e.id),
                tb.AccountCtrl.resetBalance(),
                this.fetchBalance());
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unwatchNetwork) || t.call(this);
        }
        async fetchBalance() {
          if (tb.ConfigCtrl.state.enableAccountView)
            try {
              await tb.AccountCtrl.fetchBalance();
            } catch (t) {
              console.error(t),
                tb.ToastCtrl.openToast(ra.getErrorMessage(t), "error");
            }
        }
      };
      ic([th()], id.prototype, "activeChainId", 2),
        (id = ic([ts("w3m-network-context")], id));
      var ih = Object.defineProperty,
        im = Object.getOwnPropertyDescriptor;
      let iu = class extends ta {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            eI.setTheme(),
            (this.unsubscribeTheme = tb.ThemeCtrl.subscribe(eI.setTheme)),
            this.preloadThemeImages();
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeTheme) || t.call(this);
        }
        async preloadThemeImages() {
          try {
            let { themeVariables: t } = tb.ThemeCtrl.state,
              e = [
                t?.["--w3m-background-image-url"],
                t?.["--w3m-logo-image-url"],
              ].filter(Boolean);
            e.length &&
              (await Promise.all(e.map(async (t) => ra.preloadImage(t))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images");
          }
        }
      };
      iu = ((t, e, r, i) => {
        for (
          var o, n = i > 1 ? void 0 : i ? im(e, r) : e, a = t.length - 1;
          a >= 0;
          a--
        )
          (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
        return i && n && ih(e, r, n), n;
      })([ts("w3m-theme-context")], iu);
      var ip = Object.defineProperty,
        ig = Object.getOwnPropertyDescriptor;
      let iw = class extends ta {
        constructor() {
          super(),
            (this.unwatchOptions = void 0),
            (this.unwatchAccount = void 0),
            (this.unwatchWcConnection = void 0),
            (this.timeout = void 0),
            (this.isGenerated = !1),
            (this.selectedChainId =
              null == (tv = tb.OptionsCtrl.state.selectedChain)
                ? void 0
                : tv.id),
            (this.isAccountConnected = tb.AccountCtrl.state.isConnected),
            (this.lastRetry = Date.now()),
            (this.unwatchOptions = tb.OptionsCtrl.subscribe((t) => {
              var e, r;
              (null == (e = t.selectedChain) ? void 0 : e.id) !==
                this.selectedChainId &&
                ((this.selectedChainId =
                  null == (r = t.selectedChain) ? void 0 : r.id),
                this.connectAndWait());
            })),
            (this.unwatchAccount = tb.AccountCtrl.subscribe((t) => {
              (this.isAccountConnected === t.isConnected && this.isGenerated) ||
                ((this.isAccountConnected = t.isConnected),
                setTimeout(this.connectAndWait.bind(this), 0));
            })),
            (this.unwatchWcConnection = tb.WcConnectionCtrl.subscribe((t) => {
              t.pairingEnabled && !this.isGenerated && this.connectAndWait();
            }));
        }
        disconnectedCallback() {
          var t, e, r;
          null == (t = this.unwatchOptions) || t.call(this),
            null == (e = this.unwatchAccount) || e.call(this),
            null == (r = this.unwatchWcConnection) || r.call(this);
        }
        async connectAndWait() {
          let { pairingEnabled: t } = tb.WcConnectionCtrl.state;
          if ((clearTimeout(this.timeout), !this.isAccountConnected && t)) {
            (this.isGenerated = !0),
              (this.timeout = setTimeout(this.connectAndWait.bind(this), 24e4));
            try {
              let { standaloneUri: t, selectedChain: e } = tb.OptionsCtrl.state;
              t
                ? tb.WcConnectionCtrl.setPairingUri(t)
                : await tb.Id.client().connectWalletConnect(
                    (t) => tb.WcConnectionCtrl.setPairingUri(t),
                    e?.id
                  );
            } catch (t) {
              console.error(t),
                tb.WcConnectionCtrl.setPairingError(!0),
                tb.ToastCtrl.openToast("Connection request declined", "error"),
                Date.now() - this.lastRetry >= 1e3 &&
                  ((this.lastRetry = Date.now()), this.connectAndWait());
            }
          }
        }
      };
      iw = ((t, e, r, i) => {
        for (
          var o, n = i > 1 ? void 0 : i ? ig(e, r) : e, a = t.length - 1;
          a >= 0;
          a--
        )
          (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
        return i && n && ip(e, r, n), n;
      })([ts("w3m-wc-connection-context")], iw);
      let iv = c`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
      var ib = Object.defineProperty,
        iy = Object.getOwnPropertyDescriptor,
        ix = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iy(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ib(e, r, n), n;
        };
      let iC = class extends ta {
        constructor() {
          super(),
            (this.balance = "hide"),
            (this.avatar = "show"),
            ra.rejectStandaloneButtonComponent();
        }
        onOpen() {
          let { isStandalone: t } = tb.OptionsCtrl.state;
          t ||
            (tb.uA.click({ name: "ACCOUNT_BUTTON" }),
            tb.jb.open({ route: "Account" }));
        }
        accountTemplate() {
          let t = "show" === this.avatar;
          return U`${
            t ? U`<w3m-avatar></w3m-avatar>` : null
          }<w3m-address-text></w3m-address-text>`;
        }
        render() {
          let t = "show" === this.balance,
            e = { "w3m-no-avatar": "hide" === this.avatar };
          return t
            ? U`<div><w3m-balance></w3m-balance><button @click="${
                this.onOpen
              }" class="${tC(e)}">${this.accountTemplate()}</button></div>`
            : U`<w3m-button-big @click="${
                this.onOpen
              }">${this.accountTemplate()}</w3m-button-big>`;
        }
      };
      (iC.styles = [eI.globalCss, iv]),
        ix([td()], iC.prototype, "balance", 2),
        ix([td()], iC.prototype, "avatar", 2),
        (iC = ix([ts("w3m-account-button")], iC));
      let i$ = c`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
      var iA = Object.defineProperty,
        iE = Object.getOwnPropertyDescriptor,
        ik = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iE(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && iA(e, r, n), n;
        };
      let iO = class extends ta {
        constructor() {
          super(),
            (this.chainId = 0),
            (this.label = ""),
            (this.unsubscribeNetwork = void 0);
          let { selectedChain: t } = tb.OptionsCtrl.state;
          (this.chainId = t?.id),
            (this.label = t?.name),
            (this.unsubscribeNetwork = tb.OptionsCtrl.subscribe(
              ({ selectedChain: t }) => {
                (this.chainId = t?.id), (this.label = t?.name);
              }
            ));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeNetwork) || t.call(this);
        }
        onClick() {
          tb.AV.push("SelectNetwork");
        }
        render() {
          let { chains: t, selectedChain: e } = tb.OptionsCtrl.state,
            r = t?.map((t) => t.id),
            i = e && r?.includes(e.id),
            o = t && t.length <= 1 && i;
          return U`<button @click="${this.onClick}" ?disabled="${o}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
        }
      };
      (iO.styles = [eI.globalCss, i$]),
        ik([th()], iO.prototype, "chainId", 2),
        ik([th()], iO.prototype, "label", 2),
        (iO = ik([ts("w3m-account-network-button")], iO));
      let iI = c`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
      var i_ = Object.defineProperty,
        iT = Object.getOwnPropertyDescriptor,
        iP = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iT(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && i_(e, r, n), n;
        };
      let iM = class extends ta {
        constructor() {
          super(),
            (this.address = void 0),
            (this.name = void 0),
            (this.loading = !0),
            (this.variant = "button"),
            (this.unsubscribeAccount = void 0),
            (this.address = tb.AccountCtrl.state.address),
            (this.name = tb.AccountCtrl.state.profileName),
            (this.loading = !!tb.AccountCtrl.state.profileLoading),
            (this.unsubscribeAccount = tb.AccountCtrl.subscribe(
              ({ address: t, profileName: e, profileLoading: r }) => {
                (this.address = t), (this.name = e), (this.loading = !!r);
              }
            ));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeAccount) || t.call(this);
        }
        render() {
          var t;
          let e = "button" === this.variant,
            r = { "w3m-loading": this.loading };
          return U`<w3m-text class="${tC(r)}" variant="${
            e ? "medium-regular" : "big-bold"
          }" color="${e ? "inverse" : "primary"}">${
            this.name
              ? this.name
              : ra.truncate(null != (t = this.address) ? t : "")
          }</w3m-text>`;
        }
      };
      (iM.styles = [eI.globalCss, iI]),
        iP([th()], iM.prototype, "address", 2),
        iP([th()], iM.prototype, "name", 2),
        iP([th()], iM.prototype, "loading", 2),
        iP([td()], iM.prototype, "variant", 2),
        (iM = iP([ts("w3m-address-text")], iM));
      let iN = {
          onConnecting(t) {
            ra.goToConnectingView(t);
          },
          onExternal(t) {
            ra.handleConnectorConnection(t);
          },
          manualWalletsTemplate() {
            return rn
              .manualWallets()
              .map(
                (t) =>
                  U`<w3m-wallet-button walletId="${t.id}" name="${
                    t.name
                  }" .onClick="${() =>
                    this.onConnecting(t)}"></w3m-wallet-button>`
              );
          },
          recomendedWalletsTemplate(t = !1) {
            return rn
              .recomendedWallets(t)
              .map(
                (t) =>
                  U`<w3m-wallet-button name="${t.name}" walletId="${
                    t.id
                  }" imageId="${t.image_id}" .onClick="${() =>
                    this.onConnecting(t)}"></w3m-wallet-button>`
              );
          },
          externalWalletsTemplate() {
            return rn
              .externalWallets()
              .map(
                (t) =>
                  U`<w3m-wallet-button name="${t.name}" walletId="${
                    t.id
                  }" .onClick="${() =>
                    this.onExternal(t.id)}"></w3m-wallet-button>`
              );
          },
          recentWalletTemplate() {
            let t = rn.recentWallet();
            if (t)
              return U`<w3m-wallet-button name="${t.name}" walletId="${
                t.id
              }" imageId="${t.image_id}" .recent="${!0}" .onClick="${() =>
                this.onConnecting(t)}"></w3m-wallet-button>`;
          },
          installedInjectedWalletsTemplate() {
            return rn
              .installedInjectedWallets()
              .map(
                (t) =>
                  U`<w3m-wallet-button .installed="${!0}" name="${
                    t.name
                  }" walletId="${t.id}" imageId="${
                    t.image_id
                  }" .onClick="${() =>
                    this.onConnecting(t)}"></w3m-wallet-button>`
              );
          },
          injectedWalletsTemplate() {
            return rn
              .injectedWallets()
              .map(
                (t) =>
                  U`<w3m-wallet-button name="${t.name}" walletId="${
                    t.id
                  }" imageId="${t.image_id}" .onClick="${() =>
                    this.onConnecting(t)}"></w3m-wallet-button>`
              );
          },
        },
        ij = c`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var iR = Object.defineProperty,
        iL = Object.getOwnPropertyDescriptor;
      let iS = class extends ta {
        onGoToQrcode() {
          tb.AV.push("Qrcode");
        }
        onGetWallet() {
          tb.AV.push("GetWallet");
        }
        render() {
          let { recomendedWallets: t } = tb.ExplorerCtrl.state,
            e = [...t, ...t],
            r = iN.externalWalletsTemplate(),
            i = iN.installedInjectedWalletsTemplate(),
            o = [...i, ...r].length > 0,
            n = 2 * tb.zv.RECOMMENDED_WALLET_AMOUNT;
          return U`<w3m-modal-header title="Connect your wallet" .onAction="${
            this.onGoToQrcode
          }" .actionIcon="${
            eq.QRCODE_ICON
          }"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${
            eq.MOBILE_ICON
          }<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[
            ...Array(n),
          ].map((t, r) => {
            let i = e[r % e.length];
            return i
              ? U`<w3m-wallet-image walletId="${i.id}" imageId="${i.image_id}"></w3m-wallet-image>`
              : eq.WALLET_PLACEHOLDER;
          })}</div><w3m-button-big @click="${
            ra.handleAndroidLinking
          }"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${
            o
              ? U`<w3m-modal-footer><div class="w3m-title">${eq.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${i} ${r}</div></w3m-modal-footer>`
              : null
          }<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Choose WalletConnect to see supported apps on your device${
            o ? ", or select from other options" : ""
          }`}</w3m-text><w3m-button variant="outline" .iconRight="${
            eq.ARROW_UP_RIGHT_ICON
          }" .onClick="${() =>
            this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`;
        }
      };
      (iS.styles = [eI.globalCss, ij]),
        (iS = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iL(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && iR(e, r, n), n;
        })([ts("w3m-android-wallet-selection")], iS));
      let iW = c`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
      var iD = Object.defineProperty,
        iB = Object.getOwnPropertyDescriptor,
        iU = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iB(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && iD(e, r, n), n;
        };
      let iH = class extends ta {
        constructor() {
          super(),
            (this.address = void 0),
            (this.avatar = void 0),
            (this.loading = !0),
            (this.size = "small"),
            (this.unsubscribeAccount = void 0),
            (this.address = tb.AccountCtrl.state.address),
            (this.avatar = tb.AccountCtrl.state.profileAvatar),
            (this.loading = !!tb.AccountCtrl.state.profileLoading),
            (this.unsubscribeAccount = tb.AccountCtrl.subscribe(
              ({ address: t, profileAvatar: e, profileLoading: r }) => {
                (this.address = t), (this.avatar = e), (this.loading = !!r);
              }
            ));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeAccount) || t.call(this);
        }
        render() {
          let t = {
            "w3m-placeholder": !0,
            "w3m-small": "small" === this.size,
            "w3m-medium": "medium" === this.size,
          };
          return this.avatar
            ? U`<img class="${tC(t)}" src="${this.avatar}">`
            : this.address
            ? (ra.generateAvatarColors(this.address),
              U`<div class="${tC(t)}">${
                this.loading ? U`<div class="w3m-loader"></div>` : null
              }</div>`)
            : null;
        }
      };
      (iH.styles = [eI.globalCss, iW]),
        iU([th()], iH.prototype, "address", 2),
        iU([th()], iH.prototype, "avatar", 2),
        iU([th()], iH.prototype, "loading", 2),
        iU([td()], iH.prototype, "size", 2),
        (iH = iU([ts("w3m-avatar")], iH));
      let iz = c`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
      var iZ = Object.defineProperty,
        iV = Object.getOwnPropertyDescriptor,
        iF = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iV(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && iZ(e, r, n), n;
        };
      let iG = class extends ta {
        constructor() {
          var t, e;
          super(),
            (this.symbol = void 0),
            (this.amount = void 0),
            (this.unsubscribeAccount = void 0),
            (this.symbol =
              null == (t = tb.AccountCtrl.state.balance) ? void 0 : t.symbol),
            (this.amount =
              null == (e = tb.AccountCtrl.state.balance) ? void 0 : e.amount),
            (this.unsubscribeAccount = tb.AccountCtrl.subscribe(
              ({ balance: t }) => {
                (this.symbol = t?.symbol), (this.amount = t?.amount);
              }
            ));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeAccount) || t.call(this);
        }
        render() {
          let t = "_._";
          return (
            "0.0" === this.amount
              ? (t = "0")
              : "string" == typeof this.amount && this.amount.length > 6
              ? (t = this.amount.substring(0, 6))
              : "string" == typeof this.amount && (t = this.amount),
            U`<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${t} ${this.symbol}</w3m-text></div>`
          );
        }
      };
      (iG.styles = [eI.globalCss, iz]),
        iF([th()], iG.prototype, "symbol", 2),
        iF([th()], iG.prototype, "amount", 2),
        (iG = iF([ts("w3m-balance")], iG));
      let iq = c`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
      var iK = Object.defineProperty,
        iY = Object.getOwnPropertyDescriptor,
        iQ = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? iY(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && iK(e, r, n), n;
        };
      let iJ = class extends ta {
        constructor() {
          super(),
            (this.loading = !1),
            (this.label = "Connect Wallet"),
            (this.icon = "show"),
            (this.modalUnsub = void 0),
            ra.rejectStandaloneButtonComponent(),
            (this.modalUnsub = tb.jb.subscribe((t) => {
              t.open && (this.loading = !0), t.open || (this.loading = !1);
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.modalUnsub) || t.call(this);
        }
        iconTemplate() {
          return "show" === this.icon ? eq.WALLET_CONNECT_ICON : null;
        }
        onClick() {
          tb.AccountCtrl.state.isConnected
            ? this.onDisconnect()
            : this.onConnect();
        }
        async onConnect() {
          (this.loading = !0),
            tb.uA.click({ name: "CONNECT_BUTTON" }),
            await tb.jb.open(),
            tb.jb.state.open || (this.loading = !1);
        }
        async onDisconnect() {
          tb.uA.click({ name: "DISCONNECT_BUTTON" }),
            await tb.Id.client().disconnect();
        }
        render() {
          return U`<w3m-button-big .disabled="${this.loading}" @click="${
            this.onClick
          }">${
            this.loading
              ? U`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>`
              : U`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${
                  this.label
                }</w3m-text>`
          }</w3m-button-big>`;
        }
      };
      (iJ.styles = [eI.globalCss, iq]),
        iQ([th()], iJ.prototype, "loading", 2),
        iQ([td()], iJ.prototype, "label", 2),
        iQ([td()], iJ.prototype, "icon", 2),
        (iJ = iQ([ts("w3m-connect-button")], iJ));
      let iX = c`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
      var i0 = Object.defineProperty,
        i1 = Object.getOwnPropertyDescriptor,
        i3 = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? i1(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && i0(e, r, n), n;
        };
      let i2 = class extends ta {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var t, e;
          let r =
              null !=
              (e =
                null == (t = tb.ThemeCtrl.state.themeVariables)
                  ? void 0
                  : t["--w3m-wallet-icon-large-border-radius"])
                ? e
                : eI.getPreset("--w3m-wallet-icon-large-border-radius"),
            i = 0;
          i =
            (r.includes("%") ? 0.88 * parseInt(r, 10) : parseInt(r, 10)) * 1.17;
          let o = 317 - 1.57 * i,
            n = 425 - 1.8 * i;
          return U`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${n}"></use></svg>`;
        }
        render() {
          let t = { "w3m-error": this.isError, "w3m-stale": this.isStale };
          return U`<div class="${tC(
            t
          )}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${
            this.walletId
          }" imageId="${
            this.imageId
          }"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Connection declined" : this.label}</w3m-text>`;
        }
      };
      (i2.styles = [eI.globalCss, iX]),
        i3([td()], i2.prototype, "walletId", 2),
        i3([td()], i2.prototype, "imageId", 2),
        i3([td()], i2.prototype, "isError", 2),
        i3([td()], i2.prototype, "isStale", 2),
        i3([td()], i2.prototype, "label", 2),
        (i2 = i3([ts("w3m-connector-waiting")], i2));
      var i5 = Object.defineProperty,
        i4 = Object.getOwnPropertyDescriptor,
        i6 = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? i4(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && i5(e, r, n), n;
        };
      let i7 = class extends ta {
        constructor() {
          super(),
            (this.isConnected = !1),
            (this.label = "Connect Wallet"),
            (this.icon = "show"),
            (this.avatar = "show"),
            (this.balance = "hide"),
            (this.unsubscribeAccount = void 0),
            ra.rejectStandaloneButtonComponent(),
            (this.isConnected = tb.AccountCtrl.state.isConnected),
            (this.unsubscribeAccount = tb.AccountCtrl.subscribe(
              ({ isConnected: t }) => {
                this.isConnected = t;
              }
            ));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeAccount) || t.call(this);
        }
        render() {
          let { enableAccountView: t } = tb.ConfigCtrl.state,
            e = this.balance,
            r = this.label,
            i = this.icon,
            o = this.avatar;
          return this.isConnected && t
            ? U`<w3m-account-button balance="${e}" avatar="${o}"></w3m-account-button>`
            : U`<w3m-connect-button label="${
                this.isConnected ? "Disconnect" : r
              }" icon="${i}"></w3m-connect-button>`;
        }
      };
      i6([th()], i7.prototype, "isConnected", 2),
        i6([td()], i7.prototype, "label", 2),
        i6([td()], i7.prototype, "icon", 2),
        i6([td()], i7.prototype, "avatar", 2),
        i6([td()], i7.prototype, "balance", 2),
        (i7 = i6([ts("w3m-core-button")], i7));
      let i8 = c`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
      var i9 = Object.defineProperty,
        ot = Object.getOwnPropertyDescriptor;
      let oe = class extends ta {
        render() {
          let { isStandalone: t } = tb.OptionsCtrl.state,
            { explorerExcludedWalletIds: e, enableExplorer: r } =
              tb.ConfigCtrl.state,
            i = iN.manualWalletsTemplate(),
            o = iN.recomendedWalletsTemplate(),
            n = iN.externalWalletsTemplate(),
            a = iN.recentWalletTemplate(),
            l = iN.installedInjectedWalletsTemplate(),
            s = [a, ...i, ...o];
          t || (s = [...l, a, ...n, ...i, ...o]), (s = s.filter(Boolean));
          let c = s.length > 4 || ("ALL" !== e && r),
            d = [];
          d = c ? s.slice(0, 3) : s;
          let h = !!d.length;
          return U`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
            ra.handleUriCopy
          }" .actionIcon="${
            eq.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${
            eq.MOBILE_ICON
          }<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${
            eq.SCAN_ICON
          }<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${
            h
              ? U`<w3m-modal-footer><div class="w3m-desktop-title">${
                  eq.DESKTOP_ICON
                }<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${d} ${
                  c
                    ? U`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
                    : null
                }</div></w3m-modal-footer>`
              : null
          }`;
        }
      };
      (oe.styles = [eI.globalCss, i8]),
        (oe = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? ot(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && i9(e, r, n), n;
        })([ts("w3m-desktop-wallet-selection")], oe));
      let or = c`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      var oi = Object.defineProperty,
        oo = Object.getOwnPropertyDescriptor;
      let on = class extends ta {
        render() {
          let { termsOfServiceUrl: t, privacyPolicyUrl: e } =
            tb.ConfigCtrl.state;
          return t ?? e
            ? U`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
                t
                  ? U`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
                  : null
              } ${t && e ? "and" : null} ${
                e
                  ? U`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
                  : null
              }</w3m-text></div>`
            : null;
        }
      };
      (on.styles = [eI.globalCss, or]),
        (on = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oo(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oi(e, r, n), n;
        })([ts("w3m-legal-notice")], on));
      let oa = c`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      var ol = Object.defineProperty,
        os = Object.getOwnPropertyDescriptor;
      let oc = class extends ta {
        onQrcode() {
          tb.AV.push("Qrcode");
        }
        render() {
          let { isStandalone: t } = tb.OptionsCtrl.state,
            { explorerExcludedWalletIds: e, enableExplorer: r } =
              tb.ConfigCtrl.state,
            i = iN.manualWalletsTemplate(),
            o = iN.recomendedWalletsTemplate(),
            n = iN.externalWalletsTemplate(),
            a = iN.recentWalletTemplate(),
            l = iN.installedInjectedWalletsTemplate(),
            s = [a, ...i, ...o];
          t || (s = [...l, a, ...n, ...i, ...o]), (s = s.filter(Boolean));
          let c = s.length > 8 || ("ALL" !== e && r),
            d = [];
          d = c ? s.slice(0, 7) : s;
          let h = !!d.length;
          return U`<w3m-modal-header title="Connect your wallet" .onAction="${
            this.onQrcode
          }" .actionIcon="${eq.QRCODE_ICON}"></w3m-modal-header>${
            h
              ? U`<w3m-modal-content><div>${d} ${
                  c
                    ? U`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
                    : null
                }</div></w3m-modal-content>`
              : null
          }`;
        }
      };
      (oc.styles = [eI.globalCss, oa]),
        (oc = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? os(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ol(e, r, n), n;
        })([ts("w3m-mobile-wallet-selection")], oc));
      let od = c`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
      var oh = Object.defineProperty,
        om = Object.getOwnPropertyDescriptor,
        ou = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? om(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oh(e, r, n), n;
        };
      let op = class extends ta {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = tb.jb.subscribe((t) => {
              t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeModal) || t.call(this);
        }
        get overlayEl() {
          return ra.getShadowRootElement(this, ".w3m-overlay");
        }
        get containerEl() {
          return ra.getShadowRootElement(this, ".w3m-container");
        }
        toggleBodyScroll(t) {
          if (document.querySelector("body")) {
            if (t) {
              let t = document.getElementById("w3m-styles");
              t?.remove();
            } else
              document.head.insertAdjacentHTML(
                "beforeend",
                '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
              );
          }
        }
        onCloseModal(t) {
          t.target === t.currentTarget && tb.jb.close();
        }
        onOpenModalEvent() {
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(async () => {
              let t = ra.isMobileAnimation()
                ? { y: ["50vh", "0vh"] }
                : { scale: [0.98, 1] };
              await Promise.all([
                eb(
                  this.overlayEl,
                  { opacity: [0, 1] },
                  { delay: 0.1, duration: 0.2 }
                ).finished,
                eb(this.containerEl, t, { delay: 0.1, duration: 0.2 }).finished,
              ]),
                (this.active = !0);
            }, 0);
        }
        async onCloseModalEvent() {
          this.toggleBodyScroll(!0), this.removeKeyboardEvents();
          let t = ra.isMobileAnimation()
            ? { y: ["0vh", "50vh"] }
            : { scale: [1, 0.98] };
          await Promise.all([
            eb(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished,
            eb(this.containerEl, t, { duration: 0.2 }).finished,
          ]),
            this.containerEl.removeAttribute("style"),
            (this.active = !1),
            (this.open = !1);
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (t) => {
                var e;
                "Escape" === t.key
                  ? tb.jb.close()
                  : "Tab" === t.key &&
                    ((null != (e = t.target) && e.tagName.includes("W3M-")) ||
                      this.containerEl.focus());
              },
              this.abortController
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var t;
          null == (t = this.abortController) || t.abort(),
            (this.abortController = void 0);
        }
        managedModalContextTemplate() {
          let { isStandalone: t } = tb.OptionsCtrl.state;
          return t
            ? null
            : U`<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`;
        }
        render() {
          let t = { "w3m-overlay": !0, "w3m-active": this.active };
          return U`<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${tC(
            t
          )}" @click="${
            this.onCloseModal
          }" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${
            this.open
              ? U`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`
              : null
          }</div></div>`;
        }
      };
      (op.styles = [eI.globalCss, od]),
        ou([th()], op.prototype, "open", 2),
        ou([th()], op.prototype, "active", 2),
        (op = ou([ts("w3m-modal")], op));
      let og = c`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
      var ow = Object.defineProperty,
        of = Object.getOwnPropertyDescriptor,
        ov = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? of(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ow(e, r, n), n;
        };
      let ob = class extends ta {
        constructor() {
          super(),
            (this.chainId = ""),
            (this.label = ""),
            (this.wrongNetwork = !1),
            (this.unsubscribeNetwork = void 0),
            ra.rejectStandaloneButtonComponent();
          let { selectedChain: t } = tb.OptionsCtrl.state;
          this.onSetChainData(t),
            (this.unsubscribeNetwork = tb.OptionsCtrl.subscribe(
              ({ selectedChain: t }) => {
                this.onSetChainData(t);
              }
            ));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeNetwork) || t.call(this);
        }
        onSetChainData(t) {
          if (t) {
            let { chains: e } = tb.OptionsCtrl.state,
              r = e?.map((t) => t.id);
            (this.chainId = t.id.toString()),
              (this.wrongNetwork = !(null != r && r.includes(t.id))),
              (this.label = this.wrongNetwork ? "Wrong Network" : t.name);
          }
        }
        onClick() {
          tb.uA.click({ name: "NETWORK_BUTTON" }),
            tb.jb.open({ route: "SelectNetwork" });
        }
        render() {
          var t;
          let { chains: e } = tb.OptionsCtrl.state,
            r = e && e.length > 1;
          return U`<w3m-button-big @click="${
            this.onClick
          }" ?disabled="${!r}"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${
            null != (t = this.label) && t.length ? this.label : "Select Network"
          }</w3m-text></w3m-button-big>`;
        }
      };
      (ob.styles = [eI.globalCss, og]),
        ov([th()], ob.prototype, "chainId", 2),
        ov([th()], ob.prototype, "label", 2),
        ov([th()], ob.prototype, "wrongNetwork", 2),
        (ob = ov([ts("w3m-network-switch")], ob));
      let oy = c`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
      var ox = Object.defineProperty,
        oC = Object.getOwnPropertyDescriptor,
        o$ = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oC(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ox(e, r, n), n;
        };
      let oA = class extends ta {
        constructor() {
          super(...arguments),
            (this.chainId = void 0),
            (this.isError = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          return U`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`;
        }
        render() {
          let t = { "w3m-error": this.isError };
          return U`<div class="${tC(
            t
          )}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image></div><w3m-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Switch declined" : this.label}</w3m-text>`;
        }
      };
      (oA.styles = [eI.globalCss, oy]),
        o$([td()], oA.prototype, "chainId", 2),
        o$([td()], oA.prototype, "isError", 2),
        o$([td()], oA.prototype, "label", 2),
        (oA = o$([ts("w3m-network-waiting")], oA));
      let oE = c`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
      var ok = Object.defineProperty,
        oO = Object.getOwnPropertyDescriptor,
        oI = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oO(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ok(e, r, n), n;
        };
      let o_ = class extends ta {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isInjected = !1),
            (this.isInjectedInstalled = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          tb.zv.isMobile()
            ? tb.AV.replace("MobileConnecting")
            : tb.AV.replace("MobileQrcodeConnecting");
        }
        onInjected() {
          this.isInjectedInstalled
            ? tb.AV.replace("InjectedConnecting")
            : tb.AV.replace("InstallWallet");
        }
        onDesktop() {
          tb.AV.replace("DesktopConnecting");
        }
        onWeb() {
          tb.AV.replace("WebConnecting");
        }
        render() {
          let { isStandalone: t } = tb.OptionsCtrl.state;
          return U`<div>${this.isRetry ? U`<slot></slot>` : null} ${
            this.isMobile
              ? U`<w3m-button .onClick="${this.onMobile}" .iconLeft="${eq.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`
              : null
          } ${
            this.isInjected && !t
              ? U`<w3m-button .onClick="${this.onInjected}" .iconLeft="${eq.WALLET_ICON}" variant="outline">Browser</w3m-button>`
              : null
          } ${
            this.isDesktop
              ? U`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${eq.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`
              : null
          } ${
            this.isWeb
              ? U`<w3m-button .onClick="${this.onWeb}" .iconLeft="${eq.GLOBE_ICON}" variant="outline">Web</w3m-button>`
              : null
          }</div>`;
        }
      };
      (o_.styles = [eI.globalCss, oE]),
        oI([td()], o_.prototype, "isMobile", 2),
        oI([td()], o_.prototype, "isInjected", 2),
        oI([td()], o_.prototype, "isInjectedInstalled", 2),
        oI([td()], o_.prototype, "isDesktop", 2),
        oI([td()], o_.prototype, "isWeb", 2),
        oI([td()], o_.prototype, "isRetry", 2),
        (o_ = oI([ts("w3m-platform-selection")], o_));
      let oT = c`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var oP = Object.defineProperty,
        oM = Object.getOwnPropertyDescriptor;
      let oN = class extends ta {
        onClick() {
          tb.AV.push("WalletExplorer");
        }
        render() {
          let { recomendedWallets: t } = tb.ExplorerCtrl.state,
            e = rn.manualWallets(),
            r = [...t, ...e].reverse().slice(0, 4);
          return U`<button @click="${
            this.onClick
          }"><div class="w3m-icons">${r.map((t) => {
            let e = ra.getWalletIcon(t);
            if (e) return U`<img src="${e}">`;
            let r = ra.getWalletIcon({ id: t.id });
            return r ? U`<img src="${r}">` : eq.WALLET_PLACEHOLDER;
          })} ${[...Array(4 - r.length)].map(
            () => eq.WALLET_PLACEHOLDER
          )}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`;
        }
      };
      (oN.styles = [eI.globalCss, oT]),
        (oN = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oM(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oP(e, r, n), n;
        })([ts("w3m-view-all-wallets-button")], oN));
      let oj = c`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var oR = Object.defineProperty,
        oL = Object.getOwnPropertyDescriptor,
        oS = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oL(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oR(e, r, n), n;
        };
      let oW = class extends ta {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            (this.unwatchWcConnection = void 0),
            setTimeout(() => {
              let { pairingUri: t } = tb.WcConnectionCtrl.state,
                { standaloneUri: e } = tb.OptionsCtrl.state;
              this.uri = e ?? t;
            }, 0),
            (this.unwatchWcConnection = tb.WcConnectionCtrl.subscribe((t) => {
              t.pairingUri && (this.uri = t.pairingUri);
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unwatchWcConnection) || t.call(this);
        }
        get overlayEl() {
          return ra.getShadowRootElement(this, ".w3m-qr-container");
        }
        render() {
          return U`<div class="w3m-qr-container">${
            this.uri
              ? U`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>`
              : U`<w3m-spinner></w3m-spinner>`
          }</div>`;
        }
      };
      (oW.styles = [eI.globalCss, oj]),
        oS([td()], oW.prototype, "walletId", 2),
        oS([td()], oW.prototype, "imageId", 2),
        oS([th()], oW.prototype, "uri", 2),
        (oW = oS([ts("w3m-walletconnect-qr")], oW));
      let oD = c`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
      var oB = Object.defineProperty,
        oU = Object.getOwnPropertyDescriptor;
      let oH = class extends ta {
        async onDisconnect() {
          await tb.Id.client().disconnect();
        }
        async onCopyAddress() {
          var t;
          await navigator.clipboard.writeText(
            null != (t = tb.AccountCtrl.state.address) ? t : ""
          ),
            tb.ToastCtrl.openToast("Address copied", "success");
        }
        render() {
          return U`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${eq.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${eq.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
        }
      };
      (oH.styles = [eI.globalCss, oD]),
        (oH = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oU(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oB(e, r, n), n;
        })([ts("w3m-account-view")], oH));
      var oz = Object.defineProperty,
        oZ = Object.getOwnPropertyDescriptor;
      let oV = class extends ta {
        viewTemplate() {
          return tb.zv.isAndroid()
            ? U`<w3m-android-wallet-selection></w3m-android-wallet-selection>`
            : tb.zv.isMobile()
            ? U`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>`
            : U`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
        }
        render() {
          return U`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
        }
      };
      (oV.styles = [eI.globalCss]),
        (oV = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oZ(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oz(e, r, n), n;
        })([ts("w3m-connect-wallet-view")], oV));
      let oF = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var oG = Object.defineProperty,
        oq = Object.getOwnPropertyDescriptor,
        oK = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oq(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oG(e, r, n), n;
        };
      let oY = class extends ta {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openDesktopApp(),
            (this.unwatchConnection = tb.WcConnectionCtrl.subscribe((t) => {
              this.isError = t.pairingError;
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unwatchConnection) || t.call(this);
        }
        onFormatAndRedirect(t) {
          let { desktop: e, name: r } = tb.zv.getWalletRouterData(),
            i = e?.native;
          if (i) {
            let e = tb.zv.formatNativeUrl(i, t, r);
            tb.zv.openHref(e, "_self");
          }
        }
        openDesktopApp() {
          tb.WcConnectionCtrl.setPairingError(!1);
          let { standaloneUri: t } = tb.OptionsCtrl.state,
            { pairingUri: e } = tb.WcConnectionCtrl.state,
            r = tb.zv.getWalletRouterData();
          ra.setRecentWallet(r),
            t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e);
        }
        render() {
          let { name: t, id: e, image_id: r } = tb.zv.getWalletRouterData(),
            {
              isMobile: i,
              isInjected: o,
              isWeb: n,
            } = ra.getCachedRouterWalletPlatforms();
          return U`<w3m-modal-header title="${t}" .onAction="${
            ra.handleUriCopy
          }" .actionIcon="${
            eq.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${r}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${i}" .isInjected="${o}" .isWeb="${n}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(
            this
          )}" .iconRight="${
            eq.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (oY.styles = [eI.globalCss, oF]),
        oK([th()], oY.prototype, "isError", 2),
        (oY = oK([ts("w3m-desktop-connecting-view")], oY));
      let oQ = c`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
      var oJ = Object.defineProperty,
        oX = Object.getOwnPropertyDescriptor;
      let o0 = class extends ta {
        onGet(t) {
          tb.zv.openHref(t, "_blank");
        }
        render() {
          let t = tb.ExplorerCtrl.state.recomendedWallets.slice(0, 5),
            e = rn.manualWallets().slice(0, 5),
            r = t.length,
            i = e.length;
          return U`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${
            r
              ? t.map(
                  (t) =>
                    U`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                      t.id
                    }" imageId="${
                      t.image_id
                    }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                      t.name
                    }</w3m-text><w3m-button .iconRight="${
                      eq.ARROW_RIGHT_ICON
                    }" .onClick="${() =>
                      this.onGet(t.homepage)}">Get</w3m-button></div></div>`
                )
              : null
          } ${
            i
              ? e.map(
                  (t) =>
                    U`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                      t.id
                    }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                      t.name
                    }</w3m-text><w3m-button .iconRight="${
                      eq.ARROW_RIGHT_ICON
                    }" .onClick="${() =>
                      this.onGet(
                        t.links.universal
                      )}">Get</w3m-button></div></div>`
                )
              : null
          }</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${
            ra.openWalletExplorerUrl
          }" .iconRight="${
            eq.ARROW_UP_RIGHT_ICON
          }">Explore Wallets</w3m-button></div>`;
        }
      };
      (o0.styles = [eI.globalCss, oQ]),
        (o0 = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? oX(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && oJ(e, r, n), n;
        })([ts("w3m-get-wallet-view")], o0));
      let o1 = c`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
      var o3 = Object.defineProperty,
        o2 = Object.getOwnPropertyDescriptor;
      let o5 = class extends ta {
        constructor() {
          super(...arguments),
            (this.learnUrl = "https://ethereum.org/en/wallets/");
        }
        onGet() {
          tb.ConfigCtrl.state.enableExplorer
            ? tb.AV.push("GetWallet")
            : ra.openWalletExplorerUrl();
        }
        onLearnMore() {
          tb.zv.openHref(this.learnUrl, "_blank");
        }
        render() {
          return U`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${
            eq.HELP_CHART_IMG
          } ${eq.HELP_PAINTING_IMG} ${
            eq.HELP_ETH_IMG
          }</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
            eq.HELP_KEY_IMG
          } ${eq.HELP_USER_IMG} ${
            eq.HELP_LOCK_IMG
          }</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
            eq.HELP_COMPAS_IMG
          } ${eq.HELP_NOUN_IMG} ${
            eq.HELP_DAO_IMG
          }</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(
            this
          )}" .iconLeft="${
            eq.WALLET_ICON
          }">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(
            this
          )}" .iconRight="${
            eq.ARROW_UP_RIGHT_ICON
          }">Learn More</w3m-button></div></w3m-modal-content>`;
        }
      };
      (o5.styles = [eI.globalCss, o1]),
        (o5 = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? o2(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && o3(e, r, n), n;
        })([ts("w3m-help-view")], o5));
      let o4 = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var o6 = Object.defineProperty,
        o7 = Object.getOwnPropertyDescriptor,
        o8 = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? o7(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && o6(e, r, n), n;
        };
      let o9 = class extends ta {
        constructor() {
          super(),
            (this.isError = !1),
            (this.connector = tb.Id.client().getConnectorById("injected")),
            this.openInjectedApp();
        }
        async openInjectedApp() {
          let { ready: t } = this.connector;
          t &&
            ((this.isError = !1),
            await ra.handleConnectorConnection("injected", () => {
              this.isError = !0;
            }));
        }
        render() {
          let { name: t, id: e, image_id: r } = tb.zv.getWalletRouterData(),
            {
              isMobile: i,
              isDesktop: o,
              isWeb: n,
            } = ra.getCachedRouterWalletPlatforms();
          return U`<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${r}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${i}" .isDesktop="${o}" .isWeb="${n}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(
            this
          )}" .disabled="${!this.isError}" .iconRight="${
            eq.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (o9.styles = [eI.globalCss, o4]),
        o8([th()], o9.prototype, "isError", 2),
        (o9 = o8([ts("w3m-injected-connecting-view")], o9));
      let nt = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
      var ne = Object.defineProperty,
        nr = Object.getOwnPropertyDescriptor;
      let ni = class extends ta {
        onInstall(t) {
          t && tb.zv.openHref(t, "_blank");
        }
        render() {
          let {
            name: t,
            id: e,
            image_id: r,
            homepage: i,
          } = tb.zv.getWalletRouterData();
          return U`<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${r}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</w3m-text><w3m-button .onClick="${() =>
            this.onInstall(i)}" .iconLeft="${
            eq.ARROW_DOWN_ICON
          }">Download</w3m-button></w3m-info-footer>`;
        }
      };
      (ni.styles = [eI.globalCss, nt]),
        (ni = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? nr(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ne(e, r, n), n;
        })([ts("w3m-install-wallet-view")], ni));
      let no = c`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection{margin-top:-15px}.w3m-note w3m-text{margin-top:15px}.w3m-note w3m-text span{color:var(--w3m-accent-color)}`;
      var nn = Object.defineProperty,
        na = Object.getOwnPropertyDescriptor,
        nl = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? na(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nn(e, r, n), n;
        };
      let ns = class extends ta {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openMobileApp(),
            (this.unwatchConnection = tb.WcConnectionCtrl.subscribe((t) => {
              this.isError = t.pairingError;
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unwatchConnection) || t.call(this);
        }
        onFormatAndRedirect(t, e = !1) {
          let { mobile: r, name: i } = tb.zv.getWalletRouterData(),
            o = r?.native,
            n = r?.universal;
          if (o && !e) {
            let e = tb.zv.formatNativeUrl(o, t, i);
            tb.zv.openHref(e, "_self");
          } else if (n) {
            let e = tb.zv.formatUniversalUrl(n, t, i);
            tb.zv.openHref(e, "_self");
          }
        }
        openMobileApp(t = !1) {
          tb.WcConnectionCtrl.setPairingError(!1);
          let { standaloneUri: e } = tb.OptionsCtrl.state,
            { pairingUri: r } = tb.WcConnectionCtrl.state,
            i = tb.zv.getWalletRouterData();
          ra.setRecentWallet(i),
            e ? this.onFormatAndRedirect(e, t) : this.onFormatAndRedirect(r, t);
        }
        onGoToAppStore(t) {
          t && tb.zv.openHref(t, "_blank");
        }
        render() {
          let {
              name: t,
              id: e,
              image_id: r,
              app: i,
              mobile: o,
            } = tb.zv.getWalletRouterData(),
            { isWeb: n } = ra.getCachedRouterWalletPlatforms(),
            a = i?.ios,
            l = o?.universal;
          return U`<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${r}" label="Tap 'Open' to continue…" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-platform-selection .isWeb="${n}" .isRetry="${!0}"><w3m-button .onClick="${() =>
            this.openMobileApp(!1)}" .iconRight="${
            eq.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection>${
            l
              ? U`<w3m-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
                  this.openMobileApp(
                    !0
                  )}">Try this alternate link</span></w3m-text>`
              : null
          }</w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${e}" imageId="${r}"></w3m-wallet-image><w3m-text>${`Get ${t}`}</w3m-text></div><w3m-button .iconRight="${
            eq.ARROW_RIGHT_ICON
          }" .onClick="${() =>
            this.onGoToAppStore(
              a
            )}" variant="ghost">App Store</w3m-button></w3m-info-footer>`;
        }
      };
      (ns.styles = [eI.globalCss, no]),
        nl([th()], ns.prototype, "isError", 2),
        (ns = nl([ts("w3m-mobile-connecting-view")], ns));
      let nc = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var nd = Object.defineProperty,
        nh = Object.getOwnPropertyDescriptor;
      let nm = class extends ta {
        render() {
          let { name: t, id: e, image_id: r } = tb.zv.getWalletRouterData(),
            {
              isInjected: i,
              isDesktop: o,
              isWeb: n,
            } = ra.getCachedRouterWalletPlatforms();
          return U`<w3m-modal-header title="${t}" .onAction="${
            ra.handleUriCopy
          }" .actionIcon="${
            eq.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${e}" imageId="${r}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</w3m-text><w3m-platform-selection .isDesktop="${o}" .isInjected="${i}" .isWeb="${n}"></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (nm.styles = [eI.globalCss, nc]),
        (nm = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? nh(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nd(e, r, n), n;
        })([ts("w3m-mobile-qr-connecting-view")], nm));
      var nu = Object.defineProperty,
        np = Object.getOwnPropertyDescriptor;
      let ng = class extends ta {
        render() {
          return U`<w3m-modal-header title="Scan the code" .onAction="${ra.handleUriCopy}" .actionIcon="${eq.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
        }
      };
      (ng.styles = [eI.globalCss]),
        (ng = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? np(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nu(e, r, n), n;
        })([ts("w3m-qrcode-view")], ng));
      let nw = c`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center}`;
      var nf = Object.defineProperty,
        nv = Object.defineProperties,
        nb = Object.getOwnPropertyDescriptor,
        ny = Object.getOwnPropertyDescriptors,
        nx = Object.getOwnPropertySymbols,
        nC = Object.prototype.hasOwnProperty,
        n$ = Object.prototype.propertyIsEnumerable,
        nA = (t, e, r) =>
          e in t
            ? nf(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        nE = (t, e) => {
          for (var r in e || (e = {})) nC.call(e, r) && nA(t, r, e[r]);
          if (nx) for (var r of nx(e)) n$.call(e, r) && nA(t, r, e[r]);
          return t;
        },
        nk = (t, e) => nv(t, ny(e)),
        nO = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? nb(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nf(e, r, n), n;
        };
      let nI = class extends ta {
        constructor() {
          super(),
            (this.connectedChains = "ALL"),
            (this.isUnsupportedChains = !1),
            this.getConnectedChainIds();
        }
        async getConnectedChainIds() {
          this.connectedChains = await tb.Id.client().getConnectedChainIds();
        }
        async onSelectChain(t) {
          try {
            let {
                selectedChain: e,
                walletConnectVersion: r,
                isPreferInjected: i,
              } = tb.OptionsCtrl.state,
              { isConnected: o } = tb.AccountCtrl.state;
            o
              ? e?.id === t.id
                ? tb.AV.reset("Account")
                : 2 === r
                ? (await tb.Id.client().switchNetwork({ chainId: t.id }),
                  tb.AV.reset("Account"))
                : tb.AV.push("SwitchNetwork", { SwitchNetwork: t })
              : i
              ? (tb.OptionsCtrl.setSelectedChain(t), tb.jb.close())
              : (tb.OptionsCtrl.setSelectedChain(t),
                tb.AV.push("ConnectWallet"));
          } catch (t) {
            console.error(t),
              tb.ToastCtrl.openToast("Unsupported chain", "error");
          }
        }
        isUnsuportedChainId(t) {
          return "string" == typeof this.connectedChains &&
            "ALL" !== this.connectedChains
            ? ((this.isUnsupportedChains = !0), !0)
            : !!Array.isArray(this.connectedChains) &&
                !this.connectedChains.includes(String(t)) &&
                ((this.isUnsupportedChains = !0), !0);
        }
        render() {
          let { chains: t } = tb.OptionsCtrl.state,
            e = t?.map((t) =>
              nk(nE({}, t), { unsupported: this.isUnsuportedChainId(t.id) })
            ),
            r = e?.sort(
              (t, e) => Number(t.unsupported) - Number(e.unsupported)
            );
          return U`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${r?.map(
            (t) =>
              U`<w3m-network-button name="${t.name}" chainId="${
                t.id
              }" .unsupported="${t.unsupported}" .onClick="${async () =>
                this.onSelectChain(t)}">${t.name}</w3m-network-button>`
          )}</div></w3m-modal-content>${
            this.isUnsupportedChains
              ? U`<w3m-info-footer><w3m-text color="secondary" variant="small-thin">Your connected wallet may not support some of the networks available for this dapp</w3m-text></w3m-info-footer>`
              : null
          }`;
        }
      };
      (nI.styles = [eI.globalCss, nw]),
        nO([th()], nI.prototype, "connectedChains", 2),
        nO([th()], nI.prototype, "isUnsupportedChains", 2),
        (nI = nO([ts("w3m-select-network-view")], nI));
      let n_ = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
      var nT = Object.defineProperty,
        nP = Object.getOwnPropertyDescriptor,
        nM = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? nP(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nT(e, r, n), n;
        };
      let nN = class extends ta {
        constructor() {
          super(), (this.isError = !1), this.onSwitchNetwork();
        }
        async onSwitchNetwork() {
          try {
            this.isError = !1;
            let t = tb.zv.getSwitchNetworkRouterData();
            await tb.Id.client().switchNetwork({ chainId: t.id }),
              tb.OptionsCtrl.setSelectedChain(t),
              tb.AV.reset("Account");
          } catch {
            this.isError = !0;
          }
        }
        render() {
          let { id: t, name: e } = tb.zv.getSwitchNetworkRouterData();
          return U`<w3m-modal-header title="${`Connect to ${e}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${t}" label="Approve in your wallet" .isError="${
            this.isError
          }"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(
            this
          )}" .disabled="${!this.isError}" .iconRight="${
            eq.RETRY_ICON
          }">Try Again</w3m-button></w3m-info-footer>`;
        }
      };
      (nN.styles = [eI.globalCss, n_]),
        nM([th()], nN.prototype, "isError", 2),
        (nN = nM([ts("w3m-switch-network-view")], nN));
      let nj = c`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var nR = Object.defineProperty,
        nL = Object.getOwnPropertyDescriptor,
        nS = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? nL(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nR(e, r, n), n;
        };
      let nW = class extends ta {
        constructor() {
          super(...arguments),
            (this.loading = !tb.ExplorerCtrl.state.wallets.listings.length),
            (this.firstFetch = !tb.ExplorerCtrl.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = ra.debounce((t) => {
              t.length >= 3
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = t),
                  tb.ExplorerCtrl.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  tb.ExplorerCtrl.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var t;
          null == (t = this.intersectionObserver) || t.disconnect();
        }
        get placeholderEl() {
          return ra.getShadowRootElement(this, ".w3m-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([t]) => {
            t.isIntersecting &&
              !(this.search && this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          let { wallets: t, search: e } = tb.ExplorerCtrl.state,
            { listings: r, total: i } = this.search ? e : t;
          return i <= 40 || r.length >= i;
        }
        async fetchWallets() {
          var t;
          let {
              wallets: e,
              search: r,
              injectedWallets: i,
            } = tb.ExplorerCtrl.state,
            { listings: o, total: n, page: a } = this.search ? r : e;
          if (!this.endReached && (this.firstFetch || (n > 40 && o.length < n)))
            try {
              this.loading = !0;
              let e =
                  null == (t = tb.OptionsCtrl.state.standaloneChains)
                    ? void 0
                    : t.join(","),
                { listings: r } = await tb.ExplorerCtrl.getWallets({
                  page: this.firstFetch ? 1 : a + 1,
                  entries: 40,
                  search: this.search,
                  version: tb.OptionsCtrl.state.walletConnectVersion,
                  chains: e,
                }),
                o = r.map((t) => ra.getWalletIcon(t)),
                n = i.map((t) => ra.getWalletIcon(t));
              await Promise.all([
                ...o.map(async (t) => ra.preloadImage(t)),
                ...n.map(async (t) => ra.preloadImage(t)),
                tb.zv.wait(300),
              ]),
                (this.endReached = this.isLastPage());
            } catch (t) {
              console.error(t),
                tb.ToastCtrl.openToast(ra.getErrorMessage(t), "error");
            } finally {
              (this.loading = !1), (this.firstFetch = !1);
            }
        }
        onConnect(t) {
          tb.zv.isAndroid()
            ? ra.handleMobileLinking(t)
            : ra.goToConnectingView(t);
        }
        onSearchChange(t) {
          let { value: e } = t.target;
          this.searchDebounce(e);
        }
        render() {
          let { wallets: t, search: e } = tb.ExplorerCtrl.state,
            { listings: r } = this.search ? e : t,
            i = this.loading && !r.length,
            o = this.search.length >= 3,
            n = iN.injectedWalletsTemplate(),
            a = iN.manualWalletsTemplate(),
            l = iN.recomendedWalletsTemplate(!0);
          o &&
            ((n = n.filter(({ values: t }) =>
              ra.caseSafeIncludes(t[0], this.search)
            )),
            (a = a.filter(({ values: t }) =>
              ra.caseSafeIncludes(t[0], this.search)
            )),
            (l = l.filter(({ values: t }) =>
              ra.caseSafeIncludes(t[0], this.search)
            ))),
            (n = n.filter(
              (t) =>
                !l.find((e) => ra.caseSafeIncludes(t.values[0], e.values[0]))
            ));
          let s = !this.loading && !r.length && !n.length && !l.length,
            c = Math.max(n.length, r.length),
            d = {
              "w3m-loading": i,
              "w3m-end-reached": this.endReached || !this.loading,
              "w3m-empty": s,
            };
          return U`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(
            this
          )}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${tC(
            d
          )}"><div class="w3m-grid">${i ? null : l} ${
            i
              ? null
              : [...Array(c)].map(
                  (t, e) =>
                    U`${a[e]} ${n[e]} ${
                      r[e]
                        ? U`<w3m-wallet-button imageId="${
                            r[e].image_id
                          }" name="${r[e].name}" walletId="${
                            r[e].id
                          }" .onClick="${() =>
                            this.onConnect(r[e])}"></w3m-wallet-button>`
                        : null
                    }`
                )
          }</div><div class="w3m-placeholder-block">${
            s
              ? U`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`
              : null
          } ${
            !s && this.loading ? U`<w3m-spinner></w3m-spinner>` : null
          }</div></w3m-modal-content>`;
        }
      };
      (nW.styles = [eI.globalCss, nj]),
        nS([th()], nW.prototype, "loading", 2),
        nS([th()], nW.prototype, "firstFetch", 2),
        nS([th()], nW.prototype, "search", 2),
        nS([th()], nW.prototype, "endReached", 2),
        (nW = nS([ts("w3m-wallet-explorer-view")], nW));
      let nD = c`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var nB = Object.defineProperty,
        nU = Object.getOwnPropertyDescriptor,
        nH = (t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? nU(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          )
            (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && nB(e, r, n), n;
        };
      let nz = class extends ta {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openWebWallet(),
            (this.unwatchConnection = tb.WcConnectionCtrl.subscribe((t) => {
              this.isError = t.pairingError;
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unwatchConnection) || t.call(this);
        }
        onFormatAndRedirect(t) {
          let { desktop: e, name: r } = tb.zv.getWalletRouterData(),
            i = e?.universal;
          if (i) {
            let e = tb.zv.formatUniversalUrl(i, t, r);
            tb.zv.openHref(e, "_blank");
          }
        }
        openWebWallet() {
          tb.WcConnectionCtrl.setPairingError(!1);
          let { standaloneUri: t } = tb.OptionsCtrl.state,
            { pairingUri: e } = tb.WcConnectionCtrl.state,
            r = tb.zv.getWalletRouterData();
          ra.setRecentWallet(r),
            t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e);
        }
        render() {
          let { name: t, id: e, image_id: r } = tb.zv.getWalletRouterData(),
            {
              isMobile: i,
              isInjected: o,
              isDesktop: n,
            } = ra.getCachedRouterWalletPlatforms(),
            a = tb.zv.isMobile();
          return U`<w3m-modal-header title="${t}" .onAction="${
            ra.handleUriCopy
          }" .actionIcon="${
            eq.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${r}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${i}" .isInjected="${
            !a && o
          }" .isDesktop="${
            !a && n
          }" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(
            this
          )}" .iconRight="${
            eq.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (nz.styles = [eI.globalCss, nD]),
        nH([th()], nz.prototype, "isError", 2),
        (nz = nH([ts("w3m-web-connecting-view")], nz));
    },
  },
]);
