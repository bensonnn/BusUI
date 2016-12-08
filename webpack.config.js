module.exports = {
  entry: './js/main.js',
  output: { filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']//,
          // optional: ['runtime']
        }
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },
  debug: true
};
