/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'gsap',
    'famous'
], function ($, _, Backbone, JST, gsap, famous) {
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
                    this.progressBarPlaneTween.kill();
                    this.progressBarTween.kill();
                    break;

                case 'famous':
                    this.stopAnimate = true;
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
                case 'famous':

                    // import dependencies
                    var Engine = famous.core.Engine,
                        Modifier = famous.core.Modifier,
                        Transform = famous.core.Transform,
                        ImageSurface = famous.surfaces.ImageSurface,
                        StateModifier = famous.modifiers.StateModifier,
                        Surface = famous.core.Surface;


                    // create the main context plane
                    var el = this.$el.find('.ajaxLoadingImg')[0],
                        self = this,
                        mainContext = Engine.createContext(el),
                        parentMainContext = Engine.createContext(document.getElementById('main-section-wrap')),
                        sizeSurface = parentMainContext.getSize();

                    // create the main context bar
                    var elBar = this.$el.find('.ajaxLoadingImg')[0],
                        mainContextBar = Engine.createContext(elBar);
                    
                    /*
                    Bar Object
                     */

                    var surfaceBar = new Surface({ properties: { backgroundColor: '#d81e05' } }),
                        modifierBar = new StateModifier({ size: [10, 3] }),
                        modifierBarTrans = new Modifier({
                            transform : function () {
                                return Transform.translate(0, 20, 0);
                            }
                        });

                    var expand = function(){
                        if( !self.stopAnimate ){
                            modifierBar.setSize( [sizeSurface[0], 3], { duration: 2000 }, collapse );    
                        }
                    };

                    var collapse = function(){
                        if( !self.stopAnimate ){
                            modifierBar.setSize( [10, 3], { duration: 0 }, expand );    
                        }
                    };

                    expand();
                    mainContextBar.add(modifierBar).add(modifierBarTrans).add(surfaceBar);

                    /*
                    Plane object
                     */
                    var surfacePlane = new ImageSurface({
                        size: [45, 42],
                        content: '../../images/icon_loading.png'
                    });

                    var modifierPlane = new Modifier();

                    var modifierPlaneReset = function(){
                        modifierPlane.setTransform(Transform.translate(0, 0, 0), { duration: 0, ease: 'linear' }, function(){
                            if( !self.stopAnimate ){
                                modifierPlaneFun();
                            }
                        });
                    };

                    var modifierPlaneFun = function(){
                        modifierPlane.setTransform(Transform.translate(sizeSurface[0], 0, 0), { duration: 2000, ease: 'linear' }, function(){
                            if( !self.stopAnimate ){
                                modifierPlaneReset();    
                            }
                        });
                    };

                    mainContext.add(modifierPlane).add(surfacePlane);
                    modifierPlaneFun();

                    break;
                default:
                    
                    break;
            }
        },

        render: function () {
            var modelJSON = this.model.toJSON();

            if( modelJSON.type !== 'famous' ){
                this.$el.addClass(modelJSON.type).html(this.template(modelJSON));
            }else{
                this.$el.addClass(modelJSON.type).html('<div class="ajaxLoadingImg"></div>');
            }
            
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
