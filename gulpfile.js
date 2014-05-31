var gulp      = require('gulp'),
watch         = require('gulp-watch'),
uglify        = require('gulp-uglify'),
concat        = require('gulp-concat'),
coffee        = require('gulp-coffee'),
spawn         = require('gulp-spawn'),
autoprefixer  = require('gulp-autoprefixer'),
livereload    = require('gulp-livereload'),
clean         = require('gulp-clean'),
cache         = require('gulp-cache'),
notify        = require('gulp-notify'),
deploy        = require('gulp-gh-pages'),
imagemin      = require('gulp-imagemin');

gulp.task('default', function() {
  spawn({
    cmd: 'jekyll serve',
    args: '--watch'
  });

  var server = livereload()
  gulp.watch('_source/**/*')
      .on('change', function(file) {
        server.changed(file.path)
      });
});

gulp.task('deploy', function() {
  gulp.src('_site/**/*')
      .pipe(deploy({
        remoteUrl: 'https://github.com/vidhub/blog'
      }));
});
