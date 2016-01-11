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
      outputStyle: 'expanded',
      loadPath: 'vendor/bootstrap/scss'
    },
    files: [
      { dest: 'dist/stylesheets/<%= package.name %>.css', src: 'src/stylesheets/index.scss' }
    ]
  }
};