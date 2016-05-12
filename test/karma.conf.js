// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-24 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({


    reporters: ['progress', 'html'],
    // the default configuration

    /*htmlReporter: {
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      pageTitle: 'ASCEM Unit Tests',
      subPageTitle: 'Unit Test REsult for ASCEM',
  // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },*/


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [

      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/ng-grid-bower/ng-grid.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
      'bower_components/angular-ngMask/dist/ngMask.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/main/mainModule.js",
      "app/main/*.js",
      "app/shared/*.js",
      "app/components/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,
    runnerPort: 9100,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-html-reporter",
      "karma-chrome-launcher",
      "karma-ie-launcher",
      "karma-jasmine",
      "karma-html2js-preprocessor",
      "karma-phantomjs-launcher"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'


  });

};
