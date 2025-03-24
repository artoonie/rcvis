const path = require('path');

module.exports = {
  entry: ['./src/datatable', './src/model/candidate', './src/candidate/candidate-datatable'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
