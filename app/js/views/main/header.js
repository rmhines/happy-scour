'use strict';

var Backbone = require('backbone');
var app = require('../../shared/app');

module.exports = Backbone.View.extend({
	template: app.templates['main/header'],
	el: '#header',

	render: function () {
		console.log('Rendering header view');
		this.$el.html(this.template());
	},

	initialize: function () {
		console.log('Initializing header view');
	}
});