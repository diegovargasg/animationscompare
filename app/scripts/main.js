/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        gsap: {
            deps: ['jquery'],
            exports: 'gsap'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        gsap: '../bower_components/gsap/src/minified/TweenMax.min',
        famous: '../bower_components/famous/dist/famous-global.min'
    }
});

require([
    'app'
], function (app) {
    app.initialize();
});
