'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');

var options = {
  src: 'src',
  dist: 'dist',
  errorHandler: function (title) {
    return function (err) {
      $.gutil.log($.gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

gulp.task('eslint', function () {
  return gulp.src('*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('scsslint', function () {
  return gulp.src(options.src + '/**/*.scss')
    .pipe($.scssLint({
      'config': '.scss_lint.yml'
    }))
    .pipe($.scssLint.failReporter('E'));
});

gulp.task('styles', ['scsslint'], function () {
  var sassOptions = {
    style: 'expanded'
  };

  var postCssProcessors = [
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp.src([
    options.src + '/index.scss'
  ])
    .pipe($.filter('index.scss'))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
    .pipe($.postcss(postCssProcessors)).on('error', options.errorHandler('PostCSS'))
    .pipe($.sourcemaps.write())
    .pipe($.minifyCss())
    .pipe(gulp.dest(options.dist));
});

gulp.task('default', ['eslint', 'styles']);
