// gulp modules
import gulp           from 'gulp';
import gulpMinifyHTML from 'gulp-minify-html';
import sequence       from 'run-sequence';

// webpack modules
import webpack  from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig        from './webpack-config';
import webpackProductionConfig from './webpack-production-config';

// Others
import path                    from 'path';
import express                 from 'express';
import del                     from 'del';

const devCompiler             = webpack(webpackConfig);

const config = {
  port: 3000,
  host: 'localhost',
  minifyHTML: {
    comments: true,
    spare: true
  }
};

/*
 * Development tasks
 */
gulp.task("dev-server", () => {
  const app = express();
  app.use(webpackDevMiddleware(devCompiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(devCompiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(path.join(__dirname, 'assets/index.html')))
  });
  app.listen(config.port, config.host, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Listening at http://${config.host}:${config.port}`);
  });
});

/* 
 * Production tasks
 */
gulp.task('minify', () => {
  gulp.src('assets/**/*.html')
      .pipe(gulpMinifyHTML(config.minifyHTML))
      .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task("build", (callback) => {
  webpack(webpackProductionConfig, (err, stats) => {
    if (err) {
      throw(`webpack:build - ${err}`);
    }
    console.log("[webpack:build]", stats.toString({colors: true}));
    callback();
  });
});

/*
 * Common tasks
 */
gulp.task('copy-assets', () => {
  gulp.src(['assets/**/*.{js,css,html}']).pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('clean', (done) => {
  del(["#{webpackConfig.output.path}/*"], done);
});

gulp.task('default', ['dev-server']);

gulp.task('production', done => {
  return sequence('copy-assets', 'build', 'minify', done);
});