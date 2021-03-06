/*global define*/

define([
    'jquery',
    'backbone',
    'views/header',
    'views/aside',
    'views/content'
], function ($, Backbone, HeaderView, AsideView, ContentView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        routes: {
        	'*actions':  'defaultRoute'
        }
    });

    /**
     * Default Route Method
     * @private
     * @description init the general layout elements like header, content, aside
     * @type {function}
     */
    var defaultRoute = function() {

        var contentView = new ContentView();
    	var headerView = new HeaderView();
    	var asideView = new AsideView();
	};

    /**
     * [initialize description]
     * @return {[type]} [description]
     * @description Initializes the router
     * @public
     */
    var initialize = function(){	
    	var mainRouter = new RouterRouter();

    	mainRouter.on('route:defaultRoute', defaultRoute);

    	/**
    	 * Starts Backbone
    	 * @type {function}
    	 * @param {Boolean} pushState removes the # from the URLs
    	 */
		Backbone.history.start({pushState: true});
    };

    return {
    	initialize:initialize
    };
});