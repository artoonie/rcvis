const path = require('path');

module.exports = {
  entry: {upload: './src/upload'},
  output: {
    filename: 'upload.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'upload',
  },
};
