'use strict';

var Backbone = require('backbone');
var app = require('../../shared/app');

module.exports = Backbone.View.extend({
	template: app.templates['main/footer'],
	el: '#footer',

	render: function () {
		console.log('Rendering footer view');
		this.$el.html(this.template());
	},

	initialize: function () {
		console.log('Initializing footer view');
	}
});