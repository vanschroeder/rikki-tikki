// Generated by CoffeeScript 1.7.1
var DSNOptions, RikkiTikkiAPI, Util, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore')._;

RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI;

Util = RikkiTikkiAPI.Util;

DSNOptions = (function(_super) {
  __extends(DSNOptions, _super);

  function DSNOptions(options) {
    if (options) {
      this.setOptions(options);
    }
  }

  DSNOptions.prototype.setOptions = function(options) {
    var e;
    if (!options) {
      throw new Error('options was undefined');
    }
    if (Util.Object.isOfType(options, String)) {
      options = Util.Query.queryToObject(options);
    }
    if (!Util.Object.isOfType(options, DSNOptions)) {
      try {
        return this.__options = this.__validate(options);
      } catch (_error) {
        e = _error;
        throw Error(e);
      }
    } else {
      return this.__options = options.getOptions();
    }
  };

  DSNOptions.prototype.getOptions = function() {
    return this.__options;
  };

  DSNOptions.prototype.getReplicaSet = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.replicaSet : void 0) || null;
  };

  DSNOptions.prototype.getSSL = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.ssl : void 0) || null;
  };

  DSNOptions.prototype.getConnectTimeoutMS = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.connectTimeoutMS : void 0) || null;
  };

  DSNOptions.prototype.getSocketTimeoutMS = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.socketTimeoutMS : void 0) || null;
  };

  DSNOptions.prototype.getMaxPoolSize = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.maxPoolSize : void 0) || null;
  };

  DSNOptions.prototype.getMinPoolSize = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.minPoolSize : void 0) || null;
  };

  DSNOptions.prototype.getMaxIdleTimeMS = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.maxIdleTimeMS : void 0) || null;
  };

  DSNOptions.prototype.getWaitQueueMultiple = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.waitQueueMultiple : void 0) || null;
  };

  DSNOptions.prototype.getWaitQueueTimeoutMS = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.waitQueueTimeoutMS : void 0) || null;
  };

  DSNOptions.prototype.getW = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.w : void 0) || null;
  };

  DSNOptions.prototype.getWriteConcerns = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.w : void 0) || null;
  };

  DSNOptions.prototype.getWtimeoutMS = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.wtimeoutMS : void 0) || null;
  };

  DSNOptions.prototype.getJournal = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.journal : void 0) || null;
  };

  DSNOptions.prototype.getReadPreference = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.readPreference : void 0) || null;
  };

  DSNOptions.prototype.getReadPreferenceTags = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.readPreferenceTags : void 0) || null;
  };

  DSNOptions.prototype.getUuidRepresentation = function() {
    var _ref;
    return ((_ref = this.__options) != null ? _ref.uuidRepresentation : void 0) || null;
  };

  DSNOptions.prototype.__validate = function(object) {
    var opts;
    opts = {
      replicaSet: {
        type: String
      },
      ssl: {
        type: Boolean
      },
      connectTimeoutMS: {
        type: Number
      },
      socketTimeoutMS: {
        type: Number
      },
      maxPoolSize: {
        type: Number
      },
      minPoolSize: {
        type: Number
      },
      maxIdleTimeMS: {
        type: Number
      },
      waitQueueMultiple: {
        type: Number
      },
      waitQueueTimeoutMS: {
        type: Number
      },
      w: {
        type: [Number, String],
        restrict: /^(\-?1+)|([0-9]{1})|(majority+)|(\{\w:\d\}+)$/
      },
      wtimeoutMS: {
        type: Number
      },
      journal: {
        type: Boolean
      },
      readPreference: {
        type: String,
        restrict: /^(primary+)|(primaryPreferred+)|(secondary+)|(secondaryPreferred+)|(nearest+)$/
      },
      readPreferenceTags: {
        type: String,
        restrict: /((\w+):+(\w|\d)+),?/g,
        allowMutliple: true
      },
      uuidRepresentation: {
        type: String,
        restrict: /^(standard+)|(csharpLegacy+)|(javaLegacy+)|(pythonLegacy+)$/
      }
    };
    _.each(object, (function(_this) {
      return function(value, key) {
        var found;
        if (!opts[key]) {
          throw new Error("" + key + " is not a valid Connection Option");
        }
        if ((Util.Object.isOfType(opts[key].type, Array)) && opts[key].type.length) {
          found = false;
          _.each(opts[key].type, function(v) {
            if (Util.Object.isOfType(value, v)) {
              return found = true;
            }
          });
          if (!found) {
            throw new TypeError("" + key + " is expected to be " + (opts[key].type.join(' or ')) + ". Was '" + (typeof value) + "'");
          }
        } else {
          if (!Util.Object.isOfType(value = opts[key].type(value), opts[key].type)) {
            throw new TypeError("" + key + " is expected to be " + opts[key].type + ". Was " + (typeof value));
          }
          object[key] = value.valueOf();
        }
        if ((opts[key].restrict != null) && (value.match(opts[key].restrict)) === null) {
          throw new Error("" + key + " was malformed");
        }
      };
    })(this));
    return object;
  };

  DSNOptions.prototype.toJSON = function() {
    return this.__options;
  };

  DSNOptions.prototype.toString = function() {
    return Util.Query.objectToQuery(this.__options);
  };

  return DSNOptions;

})(Object);

module.exports = DSNOptions;