define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/aside.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h3 class="panel-title">Settings</h3>\n  </div>\n  <div class="panel-body">\n    <div class="checkbox-wrapper">\n\t\t\t<div class="checkbox">\n\t\t\t\t<label for="css3"><input id="css3" type="radio" data-type="css3" name="method[]" checked class="" /> CSS3</label>\n\t\t\t</div>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label for="GSAP"><input id="GSAP" type="radio" data-type="GSAP" name="method[]" class="" /> GSAP</label>\n\t\t\t</div>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label for="jquery"><input id="jquery" type="radio" data-type="jquery" name="method[]" class="" /> jQuery</label>\n\t\t\t</div>\n\t\t\t<div class="checkbox">\n\t\t\t\t<label for="svg"><input id="svg" type="radio" data-type="svg" name="method[]" /> svg</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label class="control-label">Number of Elements: <span id="num-el-text">1</span></label>\n\t\t\t<input type="range" id="num-el" min="1" value="1" max="50">\n\t\t</div>\n\t\t<div class="input-wrap">\n\t\t\t<button id="run-stop" class="btn btn-default"></button>\n\t\t</div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/content.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h3 class="panel-title">Result</h3>\n  </div>\n  <div class="panel-body">\n    <div id="main-section-wrap">\n    \t<p class="initial-message">No settings selected yet.</p>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/header.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-default navbar-fixed-top">\n  <div class="container">\n    <a href="#" class="navbar-brand">Simple Animations Compare</a>\n  </div>\n</nav>';

}
return __p
};

this["JST"]["app/scripts/templates/object.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="width100 height12px ajaxLoadingImg">\n\t<div class="progress-bar-bar">\n\t\t<div></div>\n\t\t<img class="progress-bar-plane" src="images/icon_loading.png">\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/objects.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="collection-view"></div>\n';

}
return __p
};

  return this["JST"];

});