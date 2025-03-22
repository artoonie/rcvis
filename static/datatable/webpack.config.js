const path = require('path');

module.exports = {
  entry: ['./src/datatable', './src/model/candidate'],
  output: {
    filename: 'datatable.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'datatable',
  },
};
