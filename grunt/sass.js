//
// GRUNT TASK: SCSS
// Builds SCSS styles into CSS
// -----------------

module.exports = {
  dev: {
    options: {
      outputStyle: 'expanded',
      sourceComments: true,
      sourceMap: true
    },
    files: [
      { dest: 'dist/stylesheets/<%= package.name %>.css', src: 'src/stylesheets/index.scss' }
    ]
  },

  dist: {
    options: {
      outputStyle: 'compressed',
      sourceComments: false,
      sourceMap: true
    },
    files: [
      { dest: 'dist/stylesheets/<%= package.name %>.min.css', src: 'src/stylesheets/index.scss' }
    ]
  }
};
