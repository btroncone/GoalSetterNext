var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  entryPatterns: [
    'spec-bundle.js',
    'app/**/*spec.js'
  ]
});

module.exports = function (w) {

  return {
    files: [
      {pattern: 'spec-bundle.js', load: false},
      {pattern: 'app/**/*.ts', load: false},
      {pattern: 'app/**/*spec.ts', ignore: true}
    ],

    tests: [
      { pattern: 'app/**/*spec.ts', load: false }
    ],

    testFramework: "jasmine",

    compilers: {
      '**/*.ts': w.compilers.typeScript({
        emitDecoratorMetadata: true,
        experimentalDecorators: true
      })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};