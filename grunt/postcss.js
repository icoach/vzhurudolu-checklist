//
// GRUNT TASK: Browserify
// Compiles th React app
// -----------------

module.exports = {
  options: {
    map: true, // inline sourcemaps

    // or
    map: {
        inline: false, // save all sourcemaps as separate files...
        annotation: 'dist/stylesheets/maps/' // ...to the specified directory
    },

    processors: [
      require('pixrem')(), // add fallbacks for rem units
      require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
      require('cssnano')() // minify the result
    ]
  },
  dist: {
    src: 'dist/stylesheets/*.css'
  }
};
