(function (window) {
  var YaakovGreater = {};
  YaakovGreater.name = "yaakov";
  var greating = "Hello ";
  YaakovGreater.sayHello = function () {
    console.log(greating + YaakovGreater.name);
  }

  window.YaakovGreater = YaakovGreater;

})(window);