define(['utils/typeUtils'], function () {

  var typeUtils = Adagio.utils.typeUtils;

  Adagio.test = function (obj) {
    if (typeUtils.isObjectEmpty(obj)) {
      console.log('PAS GLOP');
    } else {
      console.log('GLOP');
    }
  };

});
