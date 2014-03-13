require(['utils/utils'], function () {

  var typeUtils = Adagio.utils.typeUtils;

  typeUtils.isObjectEmpty = function (obj) {
    for (var prop in obj) {
      return false;
    }
    return true;
  };

});
