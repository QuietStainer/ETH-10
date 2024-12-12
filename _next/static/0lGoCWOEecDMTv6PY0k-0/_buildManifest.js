(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [{ source: "/app/:any*", destination: s }],
      fallback: [],
    },
    "/": ["static/chunks/pages/index-f141a118095e5c5f.js"],
    "/_components_/_template": [
      "static/chunks/pages/_components_/_template-83306fd438b3d9bf.js",
    ],
    "/_components_/controls": [
      "static/chunks/pages/_components_/controls-374466475b045b5c.js",
    ],
    "/_components_/exit-progress": [
      "static/chunks/pages/_components_/exit-progress-ef7161a90f848797.js",
    ],
    "/_components_/frame": [
      "static/chunks/pages/_components_/frame-80bcf7a9fc9d1546.js",
    ],
    "/_components_/modal": [
      "static/chunks/pages/_components_/modal-bf1cf98a667b5267.js",
    ],
    "/_components_/stats": [
      "static/chunks/pages/_components_/stats-23a81714b1df39ce.js",
    ],
    "/_components_/typo": [
      "static/chunks/pages/_components_/typo-9b3111bc69677b83.js",
    ],
    "/_error": ["static/chunks/pages/_error-3f6d1c55bb8051ab.js"],
    "/app": ["static/chunks/pages/app-8133f76b9125a67b.js"],
    sortedPages: [
      "/",
      "/_app",
      "/_components_/_template",
      "/_components_/controls",
      "/_components_/exit-progress",
      "/_components_/frame",
      "/_components_/modal",
      "/_components_/stats",
      "/_components_/typo",
      "/_error",
      s,
    ],
  };
})("/app")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
