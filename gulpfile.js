var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

function errorLog (error) {
  console.error.bind(error);
  this.emit('end');
}

// Scripts Task - Uglify
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Styles Task - Sass
gulp.task('styles', function(){
  gulp.src('sass/style.scss')
    .pipe(sass())
    // .pipe(sass({
    //   style: 'compressed'
    // }))
    // .on('error', errorLog)
    // .pipe(gulp.dest('dist/css'));
});

// Watch Task
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('sass/**/*.scss', ['styles']);
})

gulp.task('default', ['scripts', 'styles', 'watch']);
