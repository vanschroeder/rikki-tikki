// Generated by CoffeeScript 1.7.1
var RikkiTikkiAPI, Schema, SchemaItem, Util, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

_ = require('underscore')._;

RikkiTikkiAPI = module.parent.exports;

SchemaItem = require('./SchemaItem');

Util = RikkiTikkiAPI.Util;

Schema = (function(_super) {
  __extends(Schema, _super);

  Schema.prototype.add = function(obj, prefix) {
    if (prefix == null) {
      prefix = '';
    }
    return _.each(_.keys(obj), (function(_this) {
      return function(key, k) {
        var pK, value;
        pK = "" + prefix + key;
        if (key === null) {
          throw "Invalid value for Schema Path " + pK;
        }
        if (_.isObject(value = obj[key]) && (value.constructor || value.constructor.name === 'Object') && !value.type) {
          if (_.keys(value).length) {
            _this.nested[pK] = true;
            return _this.add(value, "" + pK + ".");
          } else {
            return _this.path(pK, value);
          }
        } else {
          return _this.path(pK, value);
        }
      };
    })(this));
  };

  Schema.prototype.path = function(path, obj) {
    this.paths[path] = new SchemaItem(path, obj);
    return this;
  };

  Schema.prototype.pathType = function(path) {
    if (__indexOf.call(this.paths, path) >= 0) {
      return 'real';
    }
    if (__indexOf.call(this.virtuals, path) >= 0) {
      return 'virtual';
    }
    if (__indexOf.call(this.nested, path) >= 0) {
      return 'nested';
    }
    if (__indexOf.call(this.subpaths, path) >= 0) {
      return 'real';
    }
    if (/\.\d+\.|\.\d+$/.test(path) && this.getPositionalPath(this, path)) {
      return 'real';
    } else {
      return 'adhocOrUndefined';
    }
  };

  Schema.prototype.virtual = function(name, options) {
    return this.virtuals[name] = name.split('.').reduce((function(mem, part, i, arr) {
      return mem[part] || (mem[part] = i === arr.length - 1 ? new RikkiTikkiAPI.VirtualType(options, name) : {});
    }), this.tree);
  };

  Schema.prototype.virtualpath = function(name) {
    return this.virtuals[name];
  };

  function Schema(obj, options) {
    this.options = options != null ? options : {};
    this.paths = {};
    this.subpaths = {};
    this.virtuals = {};
    this.nested = {};
    this.inherits = {};
    this._indexes = [];
    this.methods = {};
    this.statics = {};
    this.tree = {};
    this.options = {};
    this._requiredpaths = null;
    this.discriminatorMapping = null;
    this._indexedpaths = null;
    if ((obj != null) && !Util.Object.isOfType(obj, Schema)) {
      this.add(obj);
    }
  }

  Schema.prototype.toModel = function(name) {
    return RikkiTikkiAPI.model(name, this);
  };

  return Schema;

})(Object);

Schema.nativeTypes = ['Object', 'Number', 'String', 'Boolean', 'Array'];

Schema.reserved = _.object(_.map("on,db,add,set,get,init,isNew,path,pathType,errors,schema,options,modelName,__template,virtual,virtualpath,collection,toObject,toJSON,toString,toSource,constructor,emit,_events,_pres,_posts".split(','), function(v) {
  return [v, 1];
}));

Schema.replacer = function(key, value) {
  if ((value != null ? value.toClientSchema : void 0) != null) {
    value = value.toClientSchema();
  }
  if ((value != null) && (0 >= _.keys(this.reserved).indexOf(key))) {
    return Util.Function.toString(value);
  } else {
    return void 0;
  }
};

Schema.reviver = function(key, value) {
  var fun;
  if (0 <= _.keys(this.reserved).indexOf(key)) {
    return void 0;
  }
  if (typeof value === 'string' && ((fun = Util.Function.fromString(value)) != null)) {
    return fun;
  } else {
    return value;
  }
};

module.exports = Schema;