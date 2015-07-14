var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Scripts Task - Uglify
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Styles Task - Sass
gulp.task('styles', function(){
  gulp.src('sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

// Watch Task
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('sass/**/*.scss', ['styles']);
})

gulp.task('default', ['scripts', 'styles', 'watch']);
