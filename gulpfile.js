var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require("gulp-cssnext");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var del = require('del');

var paths = {
  styles: 'app/sass/style.css',
  scripts: 'app/js/*.js',
  images: 'app/img/**/*'
};

// Styles Task
gulp.task('styles', function(){
  var processors = [
    autoprefixer({browsers: ['last 2 version', 'ie 8', 'ie 9', 'ie 7']}),
    precss
  ];
  return gulp.src(paths.styles)
    .pipe(postcss(processors))
    .pipe(cssnext({
      sourcemap: true
    }))
    .pipe(gulp.dest('dist/css'));
});

// Scripts Task
gulp.task('scripts', function(){
  gulp.src(paths.scripts)
    // .pipe()
    .pipe(gulp.dest('dist/js'));
});

// Images Task
gulp.task('images', function(){
  gulp.src(paths.images)
    // .pipe()
    .pipe(gulp.dest('dist/img'));
});

// Watch Task
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('sass/**/*.scss', ['styles']);
})

gulp.task('clean', del.bind(null, ['.tmp', 'dist', '.sass-cache']));

gulp.task('default', ['watch']);
