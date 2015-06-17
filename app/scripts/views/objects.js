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
            this.listenTo(this.collection, 'reset', this.resetAll);
        },

        resetAll: function(col, opts){
            _.each(opts.previousModels, function(model){
                model.trigger('remove');
            });
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
            this.$el.unbind();
            this.$el.remove();
        }
    });

    return ObjectsView;
});
