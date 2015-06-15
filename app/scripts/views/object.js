/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ObjectView = Backbone.View.extend({
        template: JST['app/scripts/templates/object.ejs'],

        tagName: 'div',

        id: '',

        className: 'plane-wrapper',

        events: {},

        initialize: function () {

            this.listenTo(this.model, 'remove', this.remove);
            this.listenTo(this.model, 'add', this.renderOne);
        },

        modelAnimate: function(){
            switch(this.model.get('type')){
                case 'css3':
                    
                    break;
                case 'jquery':
                    
                    var self = this;

                    var animateLoopBar = function(){

                        self.$el.find('.progress-bar > span').css('width', '0');
                        self.$el.find('.progress-bar > span').animate({
                            width: '100%'
                        }, 2000, 'linear', animateLoopBar);
                    };

                    var animateLoopPlane = function(){

                        self.$el.find('.progress-bar-plane').css('left', '0');
                        self.$el.find('.progress-bar-plane').animate({
                           left: '100%' 
                        }, 2000, 'linear', animateLoopPlane);   
                    };

                    animateLoopBar();
                    animateLoopPlane();
                    
                    break;
                default:
                    console.log('default');
                    break;
            }
        },

        render: function () {
            var modelJSON = this.model.toJSON();
            this.$el.addClass(modelJSON.type).html(this.template(modelJSON));
            this.modelAnimate();
            return this;
        },

        remove: function(){
            $(this.el).unbind();
            $(this.el).remove();
        }
    });

    return ObjectView;
});
