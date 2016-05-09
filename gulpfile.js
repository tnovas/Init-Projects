var gulp = require('gulp');
var del = require('del');
var gulpLoadPlugins = require('gulp-load-plugins');

var plugins = gulpLoadPlugins();

var pathPublic = './public/';
var pathStatic = './assets/';

gulp.task('clean', function(){
	del.sync(pathPublic);
});

gulp.task('javascript:dev', function(){
	gulp.src(pathStatic + '/js/app/**/*.js')
    .pipe(plugins.concat('app.min.js'))
    .pipe(gulp.dest(pathPublic));

    gulp.src([
        pathStatic + 'js/vendor/angularjs.js',
        pathStatic + 'js/vendor/angular-route.js',
        pathStatic + 'js/vendor/**/*.js'
    ])
    .pipe(plugins.concat('vendor.min.js'))
    .pipe(gulp.dest(pathPublic));
});

gulp.task('css:dev', function(){
    gulp.src(pathStatic + 'styles/**/*.css')
    .pipe(plugins.concat('app.min.css'))
    .pipe(gulp.dest(pathPublic));
});

gulp.task('javascript:prod', function(){
    gulp.src(pathStatic + 'js/app/**/*.js')
    .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.gzip())
    .pipe(gulp.dest(pathPublic));

    gulp.src(pathStatic + 'js/vendor/**/*.js')
    .pipe(plugins.concat('vendor.min.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.gzip())
    .pipe(gulp.dest(pathPublic));
});

gulp.task('css:prod', function(){
    gulp.src(pathStatic + 'styles/**/*.css')
    .pipe(plugins.concat('app.min.css'))
    .pipe(plugins.uglifycss())
    .pipe(plugins.gzip())
    .pipe(gulp.dest(pathPublic));
});

gulp.task('copy', function(){
    gulp.src(pathStatic + 'images/**/*.*')
    .pipe(gulp.dest(pathPublic + 'images'));
    gulp.src(pathStatic + 'fonts/**/*.*')
    .pipe(gulp.dest(pathPublic + 'fonts'));
    gulp.src(pathStatic + 'js/app/components/**/*.html')
    .pipe(gulp.dest(pathPublic + 'views'));
});

gulp.task('default', ['clean', 'javascript:dev', 'css:dev', 'copy'], function(){
    gulp.watch(pathStatic + '**/*', ['default']);
});

gulp.task('prod', ['clean', 'javascript:prod', 'css:prod', 'copy']);