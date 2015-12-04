var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnext = require("gulp-cssnext");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync');
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
    .pipe(gulp.dest('.tmp/css'));
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
    // .pipe(connect.reload());
});

// Server Task
gulp.task('serve', ['styles'], function () {
  var files = [
    'app/**/*.html',
    'app/sass/**/*.css',
    'app/img/**/*.png',
    'app/js/**/*.js'
  ];
  browserSync.init(files, {
    notify: false,
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(['app/*.html'], ['html']);
});

// gulp.task('serve', ['styles', 'fonts'], () => {
//   browserSync({
//     notify: false,
//     port: 9000,
//     server: {
//       baseDir: ['.tmp', 'app'],
//       routes: {
//         '/bower_components': 'bower_components'
//       }
//     }
//   });

//   gulp.watch([
//     'app/*.html',
//     'app/scripts/**/*.js',
//     'app/images/**/*',
//     '.tmp/fonts/**/*'
//   ]).on('change', reload);

//   gulp.watch('app/styles/**/*.scss', ['styles']);
//   gulp.watch('app/fonts/**/*', ['fonts']);
//   gulp.watch('bower.json', ['wiredep', 'fonts']);
// });

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
// gulp.task('serve', ['browser-sync', 'watch']);

// Default Task
gulp.task('default', ['styles', 'scripts', 'images']);
