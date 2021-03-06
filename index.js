(function(angular) {
  'use strict';

  var originalModule = angular.module, library = {};

  function appendDeps(name, deps) {
    var m = originalModule(name);
    Array.prototype.push.apply(m.requires, deps);
    return m;
  }

  angular.module = function module(name, deps, configFn) {
    deps = deps || [];

    return library[name] ? appendDeps(name, deps)
      : (library[name] = originalModule(name, deps, configFn));
  };

})(window.angular);