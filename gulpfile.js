var gulp = require('gulp');
var webpack = require("gulp-webpack");

var webpackConfig = require('./webpack.config');

gulp.task("webpack", function() {
    return gulp.src('src/bundle.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('.'));
});

gulp.task('default', [
    'webpack'
]);
