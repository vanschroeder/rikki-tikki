/*
 * Noobie_Twenty.js
 * Schema Generated by RikkiTikki
 * Add custom Schema Validators, Types and Methods below
 */
var API = require('rikki-tikki');

var Noobie_Twenty = new API.Schema(
  API.extend(API.getSchemaTree('Noobie_Twenty'),
  {
    // place custom Schema Type overrides here
  })
);

/*
 * Virtual Getters/Setters
 */
Noobie_Twenty.virtuals = {
  
};

/*
 * Static Methods
 */
Noobie_Twenty.statics = {
  
};

/*
 * Custom Schema Validators
 */
Noobie_Twenty.validators = {
  
};

module.exports = API.model('Noobie_Twenty', Noobie_Twenty);