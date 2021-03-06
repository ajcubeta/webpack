module.exports = {
  entry: './app/app.js',
  output: {
    path: './app/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
