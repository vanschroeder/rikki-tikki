{_}           = require 'underscore'
fs            = require 'fs'
path          = require 'path'
RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI
Util          = RikkiTikkiAPI.Util
class AbstractLoader extends Object
  __data:null
  constructor:(@__path)->
    if (RikkiTikkiAPI.Util.Function.getFunctionName arguments.callee.caller.__super__.constructor ) != 'AbstractLoader'
      return throw "AbstractAdapter can not be directly instatiated. Use a subclass instead."
    @load() if @__path?
  pathExists: (_path)->
    if _path?.match /\.(json|js)+$/ then fs.existsSync _path else false
  load:(callback)->
    return callback? "No load path defined" if !@__path
    return callback? "path '#{@__path}' does not exist or is of incorrect type" if !@pathExists @__path
    try
      if @__path.match /\.js+$/
        @__data = require @__path.replace /\.js$/, ''
        callback? null, @__data
      else
        Util.File.readFile @__path, 'utf-8', (e, data) =>
          callback? e, data
    catch e
      callback? "could not load file '#{@__path}\n#{e}", null
  get:(attr)-> @__data[attr]
  set:(data)->
    @__data = data
  save:(callback)->
    if @__path? 
      Util.File.writeFile @__path, @toString(true), null, callback
    else
      callback? "path was not defined"
  rename:(newPath, callback)->
    if @__path? and @pathExists @__path
      fs.rename @__path, newPath, (e,s)=>
        @__path = newPath
        callback? e,s
    else
      callback? "file '#{@__path}' does not exist"
  destroy:(callback)->
    if @__path? and @pathExists @__path
      fs.unlink @__path, (e) => callback? e
    else
      callback? "file '#{@__path}' does not exist"
  create:(@__path, data, callback)->
    if typeof data == 'function'
      callback = data
      data = null
    if @__path? and !@pathExists @__path
      @save callback
    else
      throw "file '#{@__path}' already exists"
  replacer:null
  valueOf:-> 
    @__data
  toJSON:->
    JSON.parse @toString()
  toString:(readable=false)->
    return @__data if typeof @__data == 'string'
    JSON.stringify @__data, @replacer, if readable then 2 else undefined
module.exports = AbstractLoader