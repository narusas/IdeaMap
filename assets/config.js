requirejs.config({
  baseUrl: '../assets',
  shim: {
    straps: {
      exports: 'Base'
    }
  },
  paths: {
    'underscore.string': '../bower_components/underscore.string/lib/underscore.string',
    underscore: '../bower_components/underscore/underscore',
    requirejs: '../bower_components/requirejs/require',
    qunit: '../bower_components/qunit/qunit/qunit',
    paper: '../bower_components/paper/dist/paper',
    jquery: '../bower_components/jquery/dist/jquery',
    straps: '../bower_components/straps/straps'
  }
});