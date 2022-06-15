module.exports = {
    "presets": [
        "@babel/preset-env", 
        ["@babel/preset-react", {
            "runtime": "automatic"
          }],
    ],
    "plugins": [
        "jsx-control-statements",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-react-jsx",
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ]
};