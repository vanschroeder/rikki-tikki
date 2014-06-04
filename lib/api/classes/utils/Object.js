// Generated by CoffeeScript 1.7.1
var BinData, Fun, Obj, ObjectId, _ref;

_ref = require('mongodb'), ObjectId = _ref.ObjectId, BinData = _ref.BinData;

Fun = module.parent.exports.Function;

Obj = {};

Obj.getTypeOf = function(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

Obj.isOfType = function(value, kind) {
  return (this.getTypeOf(value)) === (Fun.getFunctionName(kind)) || value instanceof kind;
};

Obj.isHash = function(value) {
  if (typeof value === 'object') {
    return !(Array.isArray(value || value instanceof Date || value instanceof ObjectId || value instanceof BinData));
  }
  return false;
};

module.exports = Obj;