var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync');


// gulp.task('default', function() {
//     gulp.src('src/assets/plug-in/**/*.js') // 匹配 'client/js/somedir/somefile.js' 并且将 `base` 解析为 `client/js/`
//         .pipe(minify())
//         .pipe(gulp.dest('build'));  // 写入 'build/somedir/somefile.js'
// });

gulp.task('hello',function(){
    console.log("hello,gulp!");
})

gulp.task('sass',function(){
    console.log(2);

    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});
gulp.task('browserSync',function(){
    console.log(1);
    browserSync({
        server:{
            baseDir:'app'
        },
    })
});
gulp.task('watch',['browserSync','sass'],function(){
    console.log(123);
    gulp.watch('app/scss/**/*.scss',['sass']);
});

