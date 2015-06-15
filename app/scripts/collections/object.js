/*global define*/

define([
    'underscore',
    'backbone',
    'models/object'
], function (_, Backbone, ObjectModel) {
    'use strict';

    var ObjectCollection = Backbone.Collection.extend({
        model: ObjectModel
    });

    return ObjectCollection;
});
