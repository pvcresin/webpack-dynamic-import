const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ]
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }
        ]
      }
    ]
  }
};
