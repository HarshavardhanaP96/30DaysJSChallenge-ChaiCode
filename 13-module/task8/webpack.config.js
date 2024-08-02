const path = require("path");

module.exports = {
  entry: "./index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundled file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader for transpiling ES6+ code
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development", // Set mode to development
};
