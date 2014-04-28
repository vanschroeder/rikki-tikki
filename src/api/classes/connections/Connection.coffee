RikkiTikkiAPI = module.parent.exports.RikkiTikkiAPI
Util          = RikkiTikkiAPI.Util
EventEmitter  = require('events').EventEmitter
Connector     = null
#### sparse.Collection
# > Wrapper for Mongoose or MongoDB Clients
class Connection extends EventEmitter
  constructor:(args, @opts={})->
    Connector = require if (new Util.Capabilities()).mongooseSupported() and !@opts.forceNative then './MongooseConnection' else './NativeConnection'
    @__conn = new Connector args, @opts
    @__conn.on 'open',  (evt) => @emit 'open'
    @__conn.on 'close', (evt) => @handleClose evt
    @__conn.on 'error', (e)   => @emit 'error', "#{e}"
    @connect args if args?
    @
  handleClose:(evt)->
    @emit 'close', evt
  connect:(args)->
    @__conn.connect args
  getConnection:->
    @__conn.getConnection()
  getMongoDB:->
    @__conn.getMongoDB()
  getDatabaseName:->
    @__conn.getDatabaseName()
  isConnected:-> 
    @__conn.isConnected()
  getCollectionNames:->
    @__conn.getCollectionNames()
  close:(callback)->
    @__conn.close (e)=>
      @__conn = null
      callback? e
module.exports = Connection
module.exports.RikkiTikkiAPI = RikkiTikkiAPI