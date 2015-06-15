/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/object',
    'models/object',
    'views/objects'
], function ($, _, Backbone, JST, ObjectCollection, ObjectModel, ObjectsView) {
    'use strict';

    var AsideView = Backbone.View.extend({
        template: JST['app/scripts/templates/aside.ejs'],

        tagName: 'div',

        el: '#aside',

        id: '',

        className: '',

        events: {
            'click #run-stop': 'run',
            'change #num-el': 'updateNumObjects',
        },

        initialize: function () {
            this.numElVal = 1;
            this.render();
        },

        render: function () { 
            this.$el.html(this.template());
        },

        isRunning: false,

        run: function(e){
            
            this.$el.find('#run-stop').toggleClass('running');

            if( this.isRunning === false ){
                // Disable checkboxs
                this.checkBoxsControl();

                var checkboxsVal = this.$el.find('input:checked').data('type');
               
                //If the view is just starting, create all the objects view and collection
                var objsArr = [];

                for (var i = 1; i <= this.numElVal; i++) {
                    var objectModel = new ObjectModel();
                    objectModel.set('type', checkboxsVal);
                    objsArr.push(objectModel);
                }

                // Add the array of models to the collection at once.
                this.objectCollection = new ObjectCollection();
                this.objectsView = new ObjectsView({collection: this.objectCollection});

                this.objectCollection.add(objsArr);
                this.isRunning = true;

            }else{
                // Enable checkboxs
                this.checkBoxsControl();

                //If the view is stopped, destroy all the objects view and collection
                this.objectCollection = {};
                this.objectsView.remove();
                this.isRunning = false;
            }

            e.preventDefault();
            e.stopPropagation();
        },

        updateNumObjects: function(){

            var newVal = parseInt(this.$el.find('#num-el').val());

            if( this.isRunning === true ){

                if( newVal > this.numElVal ){
                    //Insert the new number of object into the collection

                    var numNewObj = newVal - this.numElVal;

                    for (var i = 1; i <= numNewObj; i++) {
                        var objectModel = new ObjectModel();
                        this.objectCollection.add(objectModel);
                    }

                }else{
                    //Remove a specific amount of object from the collection
                    var numRemObj = this.numElVal - newVal;
                    
                    for (var j = 1; j <= numRemObj; j++) {

                        var lastModel = this.objectCollection.last();
                        this.objectCollection.remove(lastModel);
                    }
                }
            }

            this.numElVal = newVal;
            this.updateNum();
        },

        checkBoxsControl: function(){

            if( this.isRunning === false ){
                //Disable checkboxs
                this.$el.find('input[type="radio"]').each(function(index, el){
                    $(el).attr('disabled', 'disabled');
                });
            }else{
                //Enable checkboxs
                this.$el.find('input[type="radio"]').each(function(index, el){
                    $(el).removeAttr('disabled');
                });
            }
        },

        updateNum: function(){
            this.$el.find('#num-el-text').text(this.numElVal);
        }
    });

    return AsideView;
});
