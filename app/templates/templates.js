/* !!! <<< WARNING: This file is generated by a grunt task, do not edit >>> !!! */

var Handlebars = require('handlebars/runtime');

module.exports = {};
module.exports['main/footer'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"footer-btn btn btn-home\" href=\"#home\"><b>Home</b></a>\r\n<a class=\"footer-btn btn btn-add\" href=\"#spots/add\"><b>Add</b></a>";
},"useData":true});

module.exports['main/header'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"title\"><b>HappyProwler</b></div>";
},"useData":true});

module.exports['main/home'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "	<li class=\"spot-list-item\">\r\n		<a class=\"spot-btn\" href=\"#spots/"
    + alias2(alias1((depth0 != null ? depth0._id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "<span class=\"chevron-right\"><b>></b></span></a>\r\n	</li>\r\n	<hr class=\"spot-list-hr\"></hr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"spot-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.spots : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

module.exports['spots/add'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"spot-add-wrap\">\r\n	<p><b>Name: </b><input class=\"spot-add spot-add-name\" /></p>\r\n	<p><b>Website: </b><input class=\"spot-add spot-add-website\" /></p>\r\n	<p><b>Type: </b><input class=\"spot-add spot-add-type\" /></p>\r\n	<p><b>Theme: </b><input class=\"spot-add spot-add-theme\" /></p>\r\n\r\n	<div class=\"btn btn-done\"><b>Submit!</b></div>\r\n</div>";
},"useData":true});

module.exports['spots/spot'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"spot-details\">\r\n	<p><b>Name: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.spot : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n	<p><b>Website: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.spot : depth0)) != null ? stack1.website : stack1), depth0))
    + "</p>\r\n	<p><b>Type: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.spot : depth0)) != null ? stack1.type : stack1), depth0))
    + "</p>\r\n	<p><b>Theme: </b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.spot : depth0)) != null ? stack1.theme : stack1), depth0))
    + "</p>\r\n	<p><b>Visits: </b>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.spot : depth0)) != null ? stack1.metrics : stack1)) != null ? stack1.visited : stack1), depth0))
    + "</p>\r\n	<a class=\"btn btn-back\" href=\"#home\"><b>< Back</b></a>\r\n</div>";
},"useData":true});

