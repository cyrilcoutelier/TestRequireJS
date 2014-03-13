requirejs.config({
  baseUrl: 'js/',
  paths: {
    lib: '../../../lib/js'
  }
});

require(['test'], function () {
  
  Adagio.test({});
  Adagio.test({lol: 'lol'});
  
});
