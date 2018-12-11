var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')
var connect = require('gulp-connect')
gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  })
})

gulp.task('less', function () {
  return gulp.src('./less/*.less')
      .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest('./css'))
})
gulp.task('html', function () {
  gulp.src('./*.html')
      // .pipe(gulp.dest('./'))
      .pipe(connect.reload())
})

gulp.task('watch1', function () {
  gulp.watch(['./less/*.less'], ['less'])
})

gulp.task('watch', function () {
  gulp.watch(['./*.html', './css/*.css', './js/*.js'], ['html'])
})

gulp.task('default', ['connect', 'watch', 'watch1'])
