/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ObjectModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            type: 'css3'
        },

        /*validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }*/
    });

    return ObjectModel;
});
