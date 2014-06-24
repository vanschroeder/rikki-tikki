// Generated by CoffeeScript 1.7.1
var Capabilities, Util, path, _;

_ = require('underscore')._;

path = require('path');

Util = {};

Util.detectModule = function(name) {
  return _.map(_.pluck(require.main.children, 'filename'), function(p) {
    return path.dirname(p).split(path.sep).pop();
  }).indexOf(name) > -1;
};

Util.getModulePath = function(name) {
  var idx, names, paths;
  console.log(_.pluck(require.cache, 'id'));
  names = _.map(paths = _.pluck(require.cache, 'id'), function(p) {
    return path.dirname(p).split(path.sep).pop();
  });
  if (0 <= (idx = names.indexOf(name))) {
    return paths[idx];
  } else {
    return null;
  }
};

module.exports = Util;

Capabilities = require('./Capabilities');

Util.getCapabilities = (function(_this) {
  return function() {
    return new Capabilities;
  };
})(this);

Util.Env = require('./Env');

Util.File = require('./File');

Util.Function = require('./Function');

Util.String = require('./String');

Util.Object = require('./Object');

Util.Query = require('./Query');