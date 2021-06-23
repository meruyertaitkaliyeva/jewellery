const path = require("path");

module.exports = {
  entry: [
    "./source/js/modules/menu.js",
    "./source/js/modules/carousel.js",
    "./source/js/modules/accordeon.js",
    "./source/js/modules/cartmodal.js",
    "./source/js/modules/loginmodal.js",
    "./source/js/modules/filtermodal.js"
  ],
  output: {
    filename: "script.js"
  },
  devtool: false
};
