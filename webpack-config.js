import path         from 'path';
import webpack      from 'webpack';

const reg_static_files = /\.jpe?g$|\.gif$|\.png$/;

export default {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/main'
  ],
  devtool: ["eval", "#source-map"],
  debug: true,
  output: {
    path: path.resolve(process.env.ROOT || path.join(__dirname, 'public')),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass'],
    root: [
      path.resolve('./src'),
      path.resolve('./assets')
    ]
  },
  module: {
    loaders: [
      {test: /.*\.json$/, loader: 'json'},
      {test: /\.jpe?g$|\.gif$|\.png$|\.svg$/, loader: "file-loader"},
      {
        test: /\.js$|\.jsx/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', "babel-preset-stage-2", 'react'],
          plugins: ["transform-decorators-legacy"]
        }
      },
      {
        test: reg_static_files,
        loader: "file-loader",
        query: {
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.sass|\.scss/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass-loader?sourceMap'
      }
    ]
  }
}

