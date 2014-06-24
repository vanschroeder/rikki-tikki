{_}               = require 'underscore'
{ArrayCollection} = require 'js-arraycollection'
RikkiTikkiAPI     = module.parent.exports.RikkiTikkiAPI
Util              = RikkiTikkiAPI.Util
Singleton         = module.parent.exports.Singleton
class AbstractMonitor extends Singleton
  __exclude:[]
  __iVal:null
  constructor:->
    # arguments.callee.caller = arguments.callee.caller.caller
    AbstractMonitor.__super__.constructor.call @
    @__collection = new ArrayCollection []
    _initialized = false
    @__collection.on 'collectionChanged', (data) =>
      type = 'changed'
      if !_initialized
        _initialized = true
        type = 'init'
      @emit type, data
    @refresh (e,list) => 
      _initialized = true if !list.length
    @startPolling() if RikkiTikkiAPI.Util.Env.isDevelopment()
  filter:(value)->
    if (type = typeof value) != 'string'
      throw "#{RikkiTikkiAPI.Util.Function.getConstructorName @}.filter exptected value to be a string. Type was <#{type}>"
    for item in @__exclude
      if value.match item
        return true 
    return false 
  refresh:(callback)->
    throw "#{RikkiTikkiAPI.Util.Function.getConstructorName @}.refresh(callback) is not implemented"
  startPolling:(interval)->
    @__polling_interval = interval if interval?
    @__iVal = setInterval (=> @refresh()), @__polling_interval
  stopPolling:->
    clearInterval @__iVal if @__iVal?
  getNames:->
    _.pluck @getCollection(), 'name'
  getCollection:->
    @__collection.__list
  itemExists:(name)->
    @getNames().lastIndexOf name > -1
module.exports = AbstractMonitor