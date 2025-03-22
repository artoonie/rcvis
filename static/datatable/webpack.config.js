const path = require('path');
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  entry: ['./src/datatable', './src/model/candidate'],
  output: {
    filename: 'datatable.js',
    path: path.resolve(__dirname, "..", 'dist'),
    library: 'datatable',
  },

  // plugins: [
  //   new BundleTracker({ path: __dirname, filename: "webpack-stats.json" }),
  // ],
};
