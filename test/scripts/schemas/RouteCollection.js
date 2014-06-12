/*
 * RouteCollection.js
 * Schema Generated by RikkiTikki
 * Add custom Schema Validators, Types and Methods below
 */
var API = require('rikki-tikki');

var RouteCollection = new RikkiTikkiAPI.Schema(
  API.extend(API.getSchemaTree('RouteCollection'),
  {
    // place custom Schema Type overrides here
  })
);

/*
 * Virtual Getters/Setters
 */
RouteCollection.virtuals = {
  
};

/*
 * Static Methods
 */
RouteCollection.statics = {
  
};

/*
 * Custom Schema Validators
 */
RouteCollection.validators = {
  
};

module.exports = RikkiTikkiAPI.model('RouteCollection', RouteCollection);