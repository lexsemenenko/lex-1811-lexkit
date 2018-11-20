
var exec            = require('child_process').exec

    // Gulp Functionality Related
    gulp            = require("gulp"),
    del             = require("del"),
    plumber         = require('gulp-plumber'),

    // Less
    less            = require("gulp-less"),

    // JS
    eslint          = require("gulp-eslint"),
    preprocess      = require("gulp-preprocess"),

    // Other
    browsersync     = require("browser-sync").create(),
    notify          = require("gulp-notify");


  function browserSync() {
    browsersync.init({
      server: {
        baseDir: "./public/"
      },
      port: 3000
    });
  }

// BrowserSync Reload (callback)
// function browserSyncReload(done) {
//   browsersync.reload();
//   done();
// }

var paths = {
  src: {
    css:"./_build/less/styles.less",
    js: "./_build/js/scripts.js",
    html: [
      'public/**/*.html', 
      '!public/js/**/*', 
      '!public/css/**/*', 
      '!public/files/**/*', 
      '!public/fonts/**/*', 
      '!public/images/**/*'
    ]
  },
  dest: {
    css: "./public/css/",
    js: "./public/js/",
    html:"./public/"
  },
  del: {
    css: "./public/css/",
    js: "./public/js/",
    html: "public"
  },
  watch: {
    css: "./_build/less/**/*",
    js: "./_build/js/**/*",
    html: [
      "./layouts/**/*",
      "./content/**/*"
    ]
  }
};

function clean() {
  return del([
    paths.del.css,
    paths.del.js,
    paths.del.html
  ]);
}

function css() {
  return gulp
    .src(paths.src.css)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(less())
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browsersync.stream());
}

function jsESlint() {
  return gulp
    .src(paths.src.js)
    .pipe(plumber())
    .pipe(eslint({configFile: "eslintrc.json"}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function js() {
  return gulp
    .src(paths.src.js)
    .pipe(preprocess())
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest.js))
    .pipe(browsersync.stream());
}

function html() {
  return gulp
    .src(paths.src.html)
    .pipe(gulp.dest(paths.dest.html))
    .pipe(browsersync.stream());
}

function hugo(cb) {
  exec('hugo', function (err, stdout, stderr) {
    console.log('\n-------- Hugo output--------\n');
    console.log(stdout);
    console.log('----------------------------\n');


    html();

    cb(err);
  });
}


function watch() {
  gulp.watch(paths.watch.css, css);
  gulp.watch(paths.watch.js, js);
  gulp.watch(paths.watch.html, hugo);
}


gulp.task('hugo', gulp.series(hugo));

gulp.task("clean", clean);
gulp.task("css", css);
gulp.task("js", gulp.series(jsESlint, js, function(done) {done();}));
gulp.task("build", gulp.series(clean, gulp.parallel(css, js, hugo)));
gulp.task("watch", gulp.series("build", gulp.parallel(watch, browserSync)));
gulp.task("default", gulp.series('watch', function(done) {done();}));