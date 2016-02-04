//
// GRUNT TASK: Watch
// Watch for changes in styles and javascript and compile them on-the-fly
// -----------------

module.exports = {
  options: {
    livereload: true
  },
  styles: {
    files: ['src/stylesheets/**/*'],
    tasks: ['sass', 'postcss']
  },
  js: {
    files: 'src/javascripts/**/*',
    tasks: ['browserify']
  }
};
