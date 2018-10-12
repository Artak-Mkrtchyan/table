var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options:{
            presets:["env", "react"]    // используемые плагины
        }
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              config: {
                path: './postcss.config.js'
              }
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  mode: 'development'
}
