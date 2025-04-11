const path = require('path');

module.exports = {
  entry: {upload: './src/upload'},
  output: {
    filename: 'upload.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'upload',
  },
      module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
