/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ContentView = Backbone.View.extend({
        template: JST['app/scripts/templates/content.ejs'],

        tagName: 'div',

        el: '#main-section',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return ContentView;
});
