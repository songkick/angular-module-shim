(function(angular) {
  var originalModule = angular.module, library = {};

  function appendDeps(name, deps) {
    var m = originalModule(name);
    Array.prototype.push.apply(m.requires, deps);
    return m;
  }

  angular.module = function module(name, deps) {
    deps = deps || [];

    return library[name] ? appendDeps(name, deps)
      : (library[name] = originalModule(name, deps));
  };

})(window.angular);