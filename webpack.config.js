var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/build/",
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    // publicPath: "/build/",
    stats: { colors: true },
    port: 3000,
    inline: true,
    hot:true,
    historyApiFallback:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000"
      }
    ]
  }
};
