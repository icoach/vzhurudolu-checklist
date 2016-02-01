//
// GRUNT TASK: Connect
// grunt-connect will start static webserver
// -----------------

module.exports = {
  server: {
    options: {
      port: 8888,
      base: '',
      open: true,
      livereload: true
    }
  }
};
