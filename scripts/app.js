/*global define*/

define([
  'underscore',
  'backbone',
  'routes/router'
], function(_, Backbone, Router){
  'use strict';
  
  var initialize = function(){
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});