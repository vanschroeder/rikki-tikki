# (chai           = require 'chai').should()
# http            = require 'http'
# request         = require 'supertest'
# Router          = require 'routes'
# RikkiTikkiAPI   = require '../src'
# port = 3000
# describe 'RikkiTikkiAPI.RouterAdapter Test Suite', ->
  # it 'should setup our testing environment', (done)=>
    # @api = new RikkiTikkiAPI( {
      # destructive: true
      # config_path: './test/scripts/configs'
      # schema_path: './test/scripts/schemas'
      # adapter: (@adapter = RikkiTikkiAPI.createAdapter 'routes', router:new Router)
    # }).on 'open', (e)=>
      # throw e if e?
      # @server = http.createServer @adapter.requestHandler
      # @server.listen port
      # done()
#   
  # it 'should add a route', =>
    # @adapter.addRoute('/', 'get', (req,res)->
      # res.setHeader 'Content-Type', 'application/json'
      # res.end JSON.stringify(name: 'tobias funke')
    # )
    # @adapter.params.router.match('/').should.be.a 'Object'
    # @adapter.params.router.match('/').fn.GET.should.be.a 'Function'
  # it 'should respond to a basic GET', (done)=>
    # request(@server)
    # .get('/')
    # .set('Accept', 'application/json')
    # .expect('Content-Type', /json/)
    # .expect(200, done)
  # it 'should add an API ROUTE with a GET', (done)=>
    # request(@server)
    # .get('/api/1/RouteCollection')
    # .set('Accept', 'application/json')
    # .expect('Content-Type', /json/)
    # .expect(200)
    # .end (e, res)=>
      # return done e if e?
      # res.status.should.equal 200
      # res.text.should.equal '{}'
      # done()
  # it 'should insert an new record with a POST', (done)=>
    # request(@server)
    # .post('/api/1/RouteCollection')
    # .set('Accept', 'application/json')
    # .send( {name: 'Yadayada', value:"foobar"} )
    # .expect('Content-Type', /json/)
    # .expect(200)
    # .end (e, res)=>
      # return done e if e?
      # res.status.should.equal 200
      # (@itemID = res.body._id).should.be.a 'string'
      # done()
  # it 'should update the record with a PUT', (done)=>
    # request(@server)
    # .put("/api/1/RouteCollection/#{@itemID}")
    # .set('Accept', 'application/json')
    # .send( {value:"badaboom"} )
    # .expect('Content-Type', /json/)
    # .expect(200)
    # .end (e, res)=>
      # return done e if e?
      # res.status.should.equal 200
      # done()
  # it 'should destroy the record with a DELETE', (done)=>
    # request(@server)
    # .del("/api/1/RouteCollection/#{@itemID}")
    # .set('Accept', 'application/json')
    # .expect('Content-Type', /json/)
    # .expect(200)
    # .end (e, res)=>
      # return done e if e?
      # res.status.should.equal 200
      # done()
  # it 'should teardown', (done)=>
    # @api.disconnect =>
      # @server.close =>
        # delete @api
        # done()
