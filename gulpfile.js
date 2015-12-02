var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnext = require("gulp-cssnext");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var del = require('del');

var paths = {
  styles: 'app/sass/**/*.css',
  scripts: 'app/js/*.js',
  images: 'app/img/**/*'
};

// Styles Task
gulp.task('styles', function(){

  var processors = [
    autoprefixer({browsers: ['last 2 version', 'ie 8', 'ie 9']}),
    precss
  ];

  return gulp.src('app/sass/**/styles.css')
    .pipe(postcss(processors))
    .pipe(cssnext({
      sourcemap: true
    }))
    .pipe(gulp.dest('dist/css'));
});

// Scripts Task
gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

// Images Task
gulp.task('images', function(){
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
});

// Html Task
gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(connect.reload());
});

// Connect Task
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

// Watch Task
gulp.task('watch', function(){
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(['app/*.html'], ['html']);
});

// Clean Task
gulp.task('clean', del.bind(null, ['.tmp', 'dist', '.sass-cache']));

// Serve Task
gulp.task('serve', ['connect', 'watch']);

// Default Task
gulp.task('default', ['styles', 'scripts', 'images']);
