/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'gsap'
], function ($, _, Backbone, JST, gsap) {
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

        stopAnimate: false,

        progressBarPlaneTween: {},

        progressBarTween: {},

        modelStopAnimate: function(){
            switch(this.model.get('type')){
                case 'css3':
                    
                    break;
                case 'jquery':
                    this.stopAnimate = true;
                    break;
                case 'GSAP':
                    //kill everything
                    //TweenMax.killAll();

                    this.progressBarPlaneTween.kill();
                    this.progressBarTween.kill();

                    break;
                default:
                    
                    break;
            }
        },

        modelAnimate: function(){
            switch(this.model.get('type')){
                case 'css3':
                    
                    break;
                case 'jquery':
                    
                    var self = this;

                    var animateLoopBar = function(){

                        if(!self.stopAnimate){
                            self.$el.find('.progress-bar-bar > div').css('width', '0');
                            self.$el.find('.progress-bar-bar > div').animate({
                                width: '100%'
                            }, 2000, 'linear', animateLoopBar);    
                        }
                    };

                    var animateLoopPlane = function(){

                        if(!self.stopAnimate){
                            self.$el.find('.progress-bar-plane').css('left', '0');
                            self.$el.find('.progress-bar-plane').animate({
                               left: '100%' 
                            }, 2000, 'linear', animateLoopPlane);       
                        }
                    };

                    animateLoopBar();
                    animateLoopPlane();
                    
                    break;
                case 'GSAP':

                    var progressBarPlane = this.$el.find('.progress-bar-plane'),
                        progressBar = this.$el.find('.progress-bar-bar > div');

                    this.progressBarPlaneTween = new TweenMax(progressBarPlane, 2, {left: '100%', ease: 'linear', repeat: -1});
                    this.progressBarTween = new TweenMax(progressBar, 2, {width: '100%', ease: 'linear', repeat: -1});

                    break;
                default:
                    
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
            this.modelStopAnimate();
            $(this.el).unbind();
            $(this.el).remove();
        }
    });

    return ObjectView;
});
