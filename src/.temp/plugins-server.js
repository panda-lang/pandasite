import plugin_gridsome_plugin_tailwindcss_6 from "J:\\Java\\Panda\\pandasite\\node_modules\\gridsome-plugin-tailwindcss\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_6,
    options: {"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}},"purgeConfig":{"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}]}}
  }
]
