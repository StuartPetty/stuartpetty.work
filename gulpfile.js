var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
  // place code for your default task here
});

var sass = require('gulp-ruby-sass');
 gulp.task('sass', function() {
    return sass('src/scss/style.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

var minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});



 
gulp.task('minify-css', function() {
  return gulp.src('css/site.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));


});

gulp.task('minify-css', function() {
  return gulp.src('css/animate.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));


});