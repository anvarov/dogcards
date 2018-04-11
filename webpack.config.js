const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  resolve: { extensions: ['.js', '.jsx'] }
};
