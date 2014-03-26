http            = require 'http'
Router          = require 'routes'
request         = require 'supertest'
RikkiTikkiAPI   = require( '../lib/api' ).RikkiTikkiAPI
adapter    = new RikkiTikkiAPI.RoutesAdapter router:new Router
httpServer = http.createServer adapter.requestHandler
httpServer.listen 3000
describe 'RikkiTikkiAPI.RouterAdapter Test Suite', ->
  it 'should add a route', =>
    adapter.addRoute('/', 'get', (req,res)->
      res.setHeader 'Content-Type', 'application/json'
      res.end JSON.stringify(name: 'tobias funke')
    )
    adapter.params.router.match('/').should.be.a 'Object'
    adapter.params.router.match('/').fn.GET.should.be.a 'Function'
  it 'should perform a basic GET', (done)=>
    request(httpServer)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)