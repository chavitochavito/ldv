var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('default', function() {

    browserSync.init({
        server: "./app"
    });

    
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/css/*.css").on('change', browserSync.reload);
});