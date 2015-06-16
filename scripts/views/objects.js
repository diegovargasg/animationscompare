/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/object'
], function ($, _, Backbone, JST, ObjectView) {
    'use strict';

    var ObjectsView = Backbone.View.extend({
        template: JST['app/scripts/templates/objects.ejs'],

        el: '#main-section-wrap', 

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'add', this.renderOne);
        },

        renderOne: function(object){
            var objectView = new ObjectView({model: object});
            this.$el.append(objectView.render().el);
        },

        renderAll: function(){
            this.collection.each(this.renderOne, this);
        },

        render: function () {
            this.renderAll();
        },

        remove: function(){
            this.$el.html('');
        }
    });

    return ObjectsView;
});
