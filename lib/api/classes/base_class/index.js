// Generated by CoffeeScript 1.7.1
var EventEmitter, _;

_ = require('underscore')._;

EventEmitter = require('events').EventEmitter;

module.exports.RikkiTikkiAPI = module.parent.exports;

module.exports.AbstractAdapter = require('./AbstractAdapter');

module.exports.AbstractLoader = require('./AbstractLoader');

module.exports.BaseRoute = require('./BaseRoute');

module.exports.Singleton = require('./Singleton');

module.exports.SingletonEmitter = _.extend(EventEmitter, module.exports.Singleton);

module.exports.Hash = require('./Hash');