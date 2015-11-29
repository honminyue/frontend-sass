var gulp = require('gulp');
var del = require('del');

var paths = {
  styles: 'sass/**/*.scss',
  scripts: 'app/js/*.js',
  images: 'app/img/**/*'
};

// Scripts Task
gulp.task('scripts', function(){
  gulp.src(paths.scripts)
    // .pipe()
    .pipe(gulp.dest('dist/js'));
});

// Styles Task
gulp.task('styles', function(){
  gulp.src(paths.styles)
    // .pipe()
    .pipe(gulp.dest('dist/css'));
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
