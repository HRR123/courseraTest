(function (window) {
  var johnGreater = {};
  johnGreater.name = "John";
  var greating = "Goodby ";
  johnGreater.sayGoodby = function () {
    console.log(greating + johnGreater.name);
  }

  window.johnGreater = johnGreater;

})(window);