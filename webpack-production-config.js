import webpack  from 'webpack';
import config   from './webpack-config';

const productionConfig = Object.assign({}, config, {
  entry: [
    './src/main'
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/un~$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
});

productionConfig.module.loaders.forEach(item => {
  if (item.loader !== "file-loader") return;
  item.query = {
    name: "[path][name].[ext]"
  }
});
export default productionConfig;
