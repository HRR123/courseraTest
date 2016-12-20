(function (window) {
  var yaakovGreater = {};
  yaakovGreater.name = "Yaakov ";
  var greating = "Hello ";
  yaakovGreater.sayHello = function () {
    console.log(greating + yaakovGreater.name);
  }

  window.yaakovGreater = yaakovGreater;

})(window);