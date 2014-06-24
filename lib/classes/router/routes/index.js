// Generated by CoffeeScript 1.7.1
var RikkiTikkiAPI, RouteCreate, RouteDestroy, RouteIndex, RouteShow, RouteUpdate, Routes,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI;

module.exports.RikkiTikkiAPI = RikkiTikkiAPI;

RouteIndex = require('./RouteIndex');

RouteShow = require('./RouteShow');

RouteCreate = require('./RouteCreate');

RouteUpdate = require('./RouteUpdate');

RouteDestroy = require('./RouteDestroy');

Routes = (function(_super) {
  __extends(Routes, _super);

  Routes.prototype.__routes = {};

  Routes.prototype.afterAll = function(fn) {
    var handler, obj, path, route, type, _ref, _results;
    if ((type = typeof fn) !== 'function') {
      throw "afterAl expects function type was <" + type + ">";
    }
    _ref = this.__routes;
    _results = [];
    for (route in _ref) {
      obj = _ref[route];
      _results.push((function() {
        var _results1;
        _results1 = [];
        for (path in obj) {
          handler = obj[path];
          _results1.push(handler.addAfterHandler(fn));
        }
        return _results1;
      })());
    }
    return _results;
  };

  Routes.prototype.beforeAll = function(fn) {
    var handler, obj, path, route, type, _ref, _results;
    if ((type = typeof fn) !== 'function') {
      throw "beforeAll expects function type was <" + type + ">";
    }
    _ref = this.__routes;
    _results = [];
    for (route in _ref) {
      obj = _ref[route];
      _results.push((function() {
        var _results1;
        _results1 = [];
        for (path in obj) {
          handler = obj[path];
          _results1.push(handler.addBeforeHandler(fn));
        }
        return _results1;
      })());
    }
    return _results;
  };

  Routes.prototype.getRoute = function(method, path) {};

  function Routes() {
    if (!(this.__adapter = RikkiTikkiAPI.getAdapter())) {
      throw "Routing Adapter not defined.";
    }
  }

  Routes.prototype.createRoute = function(method, path, operation) {
    if (this.__adapter) {
      this.__routes[path][method] = typeof Routes[operation] === "function" ? Routes[operation](this.__adapter.responseHandler) : void 0;
      return this.__adapter.addRoute(path, method, this.__routes[path][method]);
    }
  };

  return Routes;

})(Object);

Routes.show = function(callback) {
  return new RouteShow(callback);
};

Routes.update = function(callback) {
  return new RouteUpdate(callback);
};

Routes.create = function(callback) {
  return new RouteCreate(callback);
};

Routes.destroy = function(callback) {
  return new RouteDestroy(callback);
};

Routes.index = function(callback) {
  return new RouteIndex(callback);
};

module.exports = Routes;