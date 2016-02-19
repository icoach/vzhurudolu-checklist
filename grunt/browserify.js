//
// GRUNT TASK: Browserify
// Compiles th React app
// -----------------

module.exports = {
   dist: {
      options: {
        // external: ['react', 'react-dom'],
        transform: [
          ["babelify", { presets: ["es2015", "react"]}]
        ]
      },
      files: {
         // if the source file has an extension of es6 then
         // we change the name of the source file accordingly.
         // The result file's extension is always .js
         "./dist/javascripts/<%= package.name %>.js": ["./src/javascripts/main.js"]
      }
   }
};
