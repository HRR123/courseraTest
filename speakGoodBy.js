function (window) {
  var JohnGreater = {};
  JohnGreater.name = "John";
  var greating = "GoodBy ";
  YaakovGreater.sayGoodBye = function () {
    console.log(greating + JohnGreater.name);
  }

  window.JohnGreater = JohnGreater;

})(window);
