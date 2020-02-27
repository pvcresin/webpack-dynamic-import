const path = require('path');

module.exports = {
  entry: [
    'core-js/modules/es.array.iterator',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    filename: 'index.js',
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
