// Generated by CoffeeScript 1.7.1
var AppConfig, RikkiTikkiAPI, path, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore')._;

path = require('path');

RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI || module.parent.exports;

AppConfig = (function(_super) {
  __extends(AppConfig, _super);

  function AppConfig() {
    var o;
    AppConfig.__super__.constructor.call(this, o = {
      data_path: "" + (process.cwd()) + path.sep + ".rikki-tikki",
      trees_path: "" + (process.cwd()) + path.sep + ".rikki-tikki" + path.sep + "trees"
    }, _.keys(o));
    this.seal();
  }

  return AppConfig;

})(RikkiTikkiAPI.base_classes.Hash);

module.exports = AppConfig;