// Generated by CoffeeScript 1.7.1
var DSN, EventEmitter, NativeConnection, RikkiTikkiAPI, mongodb,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mongodb = require('mongodb');

RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI;

DSN = RikkiTikkiAPI.DSN;

EventEmitter = require('events').EventEmitter;

NativeConnection = (function(_super) {
  __extends(NativeConnection, _super);

  function NativeConnection(args) {
    this._client = mongodb.MongoClient;
    if (args != null) {
      this.connect(args);
    }
  }

  NativeConnection.prototype.handleClose = function(evt) {
    return this.emit('close', evt);
  };

  NativeConnection.prototype.connect = function(args) {
    return this.__attemptConnection(this.__dsn = new DSN(args));
  };

  NativeConnection.prototype.__attemptConnection = function(string) {
    var e;
    if (this.__conn != null) {
      return;
    }
    try {
      this._client.connect("" + string, null, (function(_this) {
        return function(e, conn) {
          if (e != null) {
            console.log(e);
            return _this.emit('error', e);
          }
          _this.__conn = conn;
          return _this.emit('open', conn);
        };
      })(this));
    } catch (_error) {
      e = _error;
      return this.emit('error', e);
    }
    return this.emit('connected', this.__conn);
  };

  NativeConnection.prototype.getConnection = function() {
    return this.__conn;
  };

  NativeConnection.prototype.getMongoDB = function() {
    return this.getConnection();
  };

  NativeConnection.prototype.getDatabaseName = function() {
    return this.getMongoDB().databaseName;
  };

  NativeConnection.prototype.getCollectionNames = function(callback) {
    return this.__conn.collectionNames((function(_this) {
      return function(e, res) {
        return typeof callback === "function" ? callback(e, res) : void 0;
      };
    })(this));
  };

  NativeConnection.prototype.isConnected = function() {
    return this.__conn != null;
  };

  NativeConnection.prototype.close = function(callback) {
    if (this.isConnected()) {
      return this.__conn.close((function(_this) {
        return function(e) {
          _this.__conn = null;
          return typeof callback === "function" ? callback(e) : void 0;
        };
      })(this));
    }
  };

  return NativeConnection;

})(EventEmitter);

module.exports = NativeConnection;