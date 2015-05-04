var gulp = require("gulp");

gulp.task("html", function () {
});

gulp.task("js", function () {
});

gulp.task("bower", function () {
});

gulp.task("css", function () {
});

gulp.task('img', function () {
});

gulp.task("build", ["bower", "html", "js", "css", "img"]);

gulp.task("server", function () {
});

gulp.task("watch", function () {
    //gulp.watch(config.bower.src, ["bower"]);
    //gulp.watch(config.html.src, ["html"]);
    //gulp.watch(config.js.src, ["js"]);
    //gulp.watch(config.css.src, ["css"]);
    //gulp.watch(config.img.src, ["img"]);
});

gulp.task("prod", ["build", "server"]);

gulp.task("default", ["build", "watch", "server"]);