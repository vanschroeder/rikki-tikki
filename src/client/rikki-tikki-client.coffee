#### global
# > References the root environment RikkiTikki is operating in
global = exports || window
if typeof exports != 'undefined'
  # Includes Backbone & Underscore if the environment is NodeJS
  _         = require('underscore')._
  Backbone  = require 'backbone'
if !global.RikkiTikki
  #### global.RikkiTikki
  # > Defines the `RikkiTikki` namespace in the 'global' environment
  RikkiTikki = global.RikkiTikki =
    #### VERSION
    # > The current RikkiTikki Version Number
    VERSION:'0.3.1-alpha'
    #### APP_ID 
    # > The Parse API Application Identifier
    APP_ID:undefined
    #### REST_KEY 
    # > The Parse API REST Access Key
    REST_KEY:undefined
    #### SESSION_TOKEN
    # > The `RikkiTikki.User` Session Token if signed in
    SESSION_TOKEN:undefined
    #### API_VERSION
    # The supported Parse API Version Number
    API_VERSION:'1'
    #### MAX_BATCH_SIZE
    # > The `RikkiTikki.Batch `request object length 
    # Can be set to -1 to disable sub-batching
    # >   
    # **Note**: Changing this may cause `RikkiTikki.Batch` requests to fail
    MAX_BATCH_SIZE:50
    #### DEFAULT_FETCH_LIMIT_OVERRIDE
    # > Stores maximum number of records to retrieve in a `fetch` operation.
    # >  
    # **Note**: Parse limits fetch requests to 100 records and provides no pagination. To circumvent this, we override the Fetch Limit to attempt to pull all records set this to a lower or higher amount to suit your needs
    # >
    # **See also**: REST API Queries
    DEFAULT_FETCH_LIMIT_OVERRIDE: 200000
    #### UNDEFINED_CLASSNAME
    # > Default ClassName to use for Models and Collections if none provided or detected
    UNDEFINED_CLASSNAME:'__UNDEFINED_CLASSNAME__'
    #### API_URI
    # > Base URI for the Parse API
    API_URI:'https://api.parse.com/1'
    #### CRUD_METHODS
    # > Mappings from CRUD to REST
    CRUD_METHODS:
      create: 'POST'
      read:   'GET'
      update: 'PUT'
      destroy:'DELETE'
  RikkiTikki.initialize = (app_id, rest_key)->
    RikkiTikki.APP_ID   = app_id
    RikkiTikki.REST_KEY = rest_key