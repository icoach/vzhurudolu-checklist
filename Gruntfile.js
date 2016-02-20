/* jshint node: true */
var path = require('path');

module.exports = function(grunt) {
  "use strict";

  // require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  // Load the plugins
  require('load-grunt-tasks')(grunt);

  // Load grunt configuration
  require('load-grunt-config')(grunt);

  // BUILD TASKS
  // -------------------------

  // Default build task
  grunt.registerTask('default', ['clean', 'css', 'js']);
  grunt.registerTask('build-dev', ['clean', 'css-dev', 'js-dev']);

  // JS tasks
  grunt.registerTask('js', ['browserify', 'uglify']);
  grunt.registerTask('js-dev', ['browserify']); // TODO: jshint

  // CSS tasks
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('css-dev', ['sass:dev', 'csslint']);

  // Server task
  grunt.registerTask('server', ['connect:server', 'watch']);
};
