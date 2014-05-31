// Generated by CoffeeScript 1.7.1
var BaseRoute, CollectionManager, RikkiTikkiAPI,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI;

CollectionManager = {};

BaseRoute = (function(_super) {
  __extends(BaseRoute, _super);

  BaseRoute.prototype.addBeforeHandler = function(fn) {
    if (typeof fn === false) {
      throw "Param must be of type 'function' param was " + (typeof fn);
    }
    if (this.before == null) {
      this.before = [];
    }
    return this.before.push(fn);
  };

  BaseRoute.prototype.addAfterHandler = function(fn) {
    if (typeof fn === false) {
      throw "Param must be of type 'function' param was " + (typeof fn);
    }
    if (this.after == null) {
      this.after = [];
    }
    return this.after.push(fn);
  };

  function BaseRoute() {
    this.__db = RikkiTikkiAPI.getConnection();
    CollectionManager = RikkiTikkiAPI.CollectionManager.getInstance();
  }

  BaseRoute.prototype.createCollection = function(name) {
    if (RikkiTikkiAPI.Util.Env.isDevelopment() && 0 > RikkiTikkiAPI.listCollections().indexOf(name)) {
      return CollectionManager.createCollection(name, {}, (function(_this) {
        return function(e, res) {};
      })(this));
    }
  };

  BaseRoute.prototype.checkSchema = function(name) {};

  return BaseRoute;

})(Object);

module.exports = BaseRoute;


/*
    if obj.before
      path = "#{@__api_path}/:collection/:id"
      app.all path, obj.before
      verbose && logger?.log 'debug', "     ALL #{path} -> before" 
      path = "#{@__api_path}/:collection/:id/*"
      app.all path, obj.before
      verbose && logger?.log 'debug', "     ALL #{path} -> before" 

    if obj.after
      path = "#{@__api_path}/:collection/:id"
      app.all path, obj.after
      verbose && logger?.log 'debug', "     ALL #{path} -> after" 
      path = "#{@__api_path}/:collection/:id/*"
      app.all path, obj.after
      verbose && logger?.log 'debug', "     ALL #{path} -> after"
 */