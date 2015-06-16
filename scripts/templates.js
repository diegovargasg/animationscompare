define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/aside.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="checkbox-wrapper">\n\t<div class="checkbox">\n\t\t<label for="css3"><input id="css3" type="radio" data-type="css3" name="method[]" checked class="" /> CSS3</label>\n\t</div>\n\t<div class="checkbox">\n\t\t<label for="js"><input id="js" type="radio" data-type="js" name="method[]" class="" /> Js</label>\n\t</div>\n\t<div class="checkbox">\n\t\t<label for="jquery"><input id="jquery" type="radio" data-type="jquery" name="method[]" class="" /> jQuery</label>\n\t</div>\n\t<div class="checkbox">\n\t\t<label for="svg"><input id="svg" type="radio" data-type="svg" name="method[]" /> svg</label>\n\t</div>\n</div>\n<div class="form-group">\n\t<label class="control-label">Number of Elements: <span id="num-el-text">1</span></label>\n\t<input type="range" id="num-el" min="1" value="1" max="50">\n</div>\n<div class="input-wrap">\n\t<button id="run-stop" class="btn btn-default"></button>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/content.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Main Section</p>\n<div id="main-section-wrap"></div>';

}
return __p
};

this["JST"]["app/scripts/templates/footer.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Footer</p>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/header.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Header</p>\n\n';

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