const
  gulp = require('gulp'),
  cssImport = require('gulp-cssimport'),
  sass = require('gulp-sass')(require('sass'));
gulp.task('styles', function () {
  return gulp.src('app/styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cssImport())
    .pipe(gulp.dest('public/styles'));
});
