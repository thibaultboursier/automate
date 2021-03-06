/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader?configFile=tsconfig.webpack.json',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'url-loader',
      },
    ],
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};
