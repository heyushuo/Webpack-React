var gulp = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');//自动添加浏览器兼容后缀
gulp.task('auto',function(){
    gulp.src('dist/css/*.css')
    .pipe(autoprefixer('last 100 versions'))//加前缀
    .pipe(gulp.dest('dist/css'))
});
gulp.task('default', ['auto']);

