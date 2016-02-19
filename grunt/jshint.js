//
// GRUNT TASK: JSHint
// Reads the projects .jshintrc file and applies coding standards.
// -----------------

module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  src: {
    src: 'dist/javascripts/*.js'
  }
};
