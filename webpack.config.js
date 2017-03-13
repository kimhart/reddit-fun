module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    publicPath: "/"
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devServer: {
    inline: "true",
    contentBase: __dirname + "/public"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: [ "react", "airbnb", "es2015", "stage-0" ]
        }
      }
    ]
  }
}
