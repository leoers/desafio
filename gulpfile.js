const gulp = require( 'gulp' );
const useref = require('gulp-useref');
const del = require('del');
const runSequence = require('run-sequence');
const cleanCSS = require('gulp-clean-css');
//const concat = require('gulp-concat'); 
//const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');


gulp.task('clean:dist', function() {
  return del.sync('dist');
})


gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
 
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('image', () =>
    gulp.src('src/media/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/media'))
);

gulp.task('compress', function() {
  gulp.src(['src/js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('json', function() {
  return gulp.src('mock-api/v1/categories/**///*')
  .pipe(gulp.dest('dist/mock-api/v1/categories'))
});


gulp.task('default', function (callback) {
  runSequence('clean:dist', 
    ['useref', 'minify-css', 'image', 'json', 'compress'],
    callback
  )
});
