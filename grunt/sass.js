//
// GRUNT TASK: SCSS
// Builds SCSS styles into CSS
// -----------------

module.exports = {
  main: {
    options: {
      includePaths: ['scss'],
      precision: 6,
      sourceComments: false,
      sourceMap: true,
      outputStyle: 'expanded'
    },
    files: [
      { dest: 'dist/stylesheets/<%= package.name %>.css', src: 'src/stylesheets/index.scss' }
    ]
  },

  dist: {
    options: {
      outputStyle: 'compressed'
    },
    files: [
      { dest: 'dist/stylesheets/<%= package.name %>.min.css', src: 'src/stylesheets/index.scss' }
    ]
  }
};
