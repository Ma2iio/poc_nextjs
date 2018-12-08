const env = require("./env-config.js")

module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["transform-define", env],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
