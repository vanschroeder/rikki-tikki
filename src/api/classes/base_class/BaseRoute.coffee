RikkiTikkiAPI     = module.parent.exports.RikkiTikkiAPI
CollectionManager = {}
class BaseRoute extends Object
  addBeforeHandler:(fn)->
    throw "Param must be of type 'function' param was #{typeof fn}" if typeof fn == false
    @before ?= []
    @before.push fn
  addAfterHandler:(fn)->
    throw "Param must be of type 'function' param was #{typeof fn}" if typeof fn == false
    @after ?= []
    @after.push fn
  constructor:->
    @__db = RikkiTikkiAPI.getConnection()
    CollectionManager = RikkiTikkiAPI.CollectionManager.getInstance()
  createCollection:(name)->
    if RikkiTikkiAPI.Util.Env.isDevelopment() and 0 > RikkiTikkiAPI.listCollections().indexOf name
      CollectionManager.createCollection name, {}, (e,res)=>
  checkSchema:(name)->
module.exports = BaseRoute   
###
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
###