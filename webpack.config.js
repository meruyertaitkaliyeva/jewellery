const path = require("path");

module.exports = {
  entry: [
    "./source/js/modules/menu.js",
    "./source/js/modules/carousel.js",
    "./source/js/modules/accordeon.js",
    "./source/js/modules/modal.js",
    "./source/js/modules/price.js"
  ],
  output: {
    filename: "script.js"
  },
  devtool: false
};
