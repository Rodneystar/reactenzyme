const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'app': [
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8080/'
    }
  },
  module: {
    rules: [
   {
     test: /\.js$/,
     exclude: /(node_modules|bower_components)/,
     use: {
       loader: 'babel-loader',
       options: {
         presets: ['@babel/preset-env']
       }
     }
   },
   {
     test: /\.css$/,
     use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
   }
 ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
