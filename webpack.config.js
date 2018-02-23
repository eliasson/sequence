module.exports = {
    entry: './src/',
    output: {
      filename: 'dist/sequence.js',
      libraryTarget: 'commonjs',
    },
    node: { module: "empty", net: "empty", fs: "empty" },
    target: 'node',
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    }
  }
