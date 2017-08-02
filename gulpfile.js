var gulp = require('gulp');
var zip = require('gulp-zip');

// 注意：请将以下路径改为自己IDE config路径
var paths = {
	ideConfig: 'C:/Users/' + process.env.USERNAME + '/.IntelliJIdea2016.2/config/'
};

gulp.task('default', [
	'copyPackageTemplates', 
	'copyFileTemplates', 
	'copyLiveTemplates', 
	'build'
]);

gulp.task('copyPackageTemplates', function() {
	return gulp.src(paths.ideConfig + 'packageTemplates/*')
			.pipe(gulp.dest('./src/packageTemplates/'));
});

gulp.task('copyFileTemplates', function() {
	return gulp.src(paths.ideConfig + 'fileTemplates/cn*')
			.pipe(gulp.dest('./src/fileTemplates/'));
});

gulp.task('copyLiveTemplates', function() {
	return gulp.src(paths.ideConfig + 'templates/conow.xml')
			.pipe(gulp.dest('./src/templates/'));
});

gulp.task('build', function() {
	return gulp.src('./src/**/*')
			.pipe(zip('Intellij-IDEA-Settings.jar'))
			.pipe(gulp.dest('dist'));
});