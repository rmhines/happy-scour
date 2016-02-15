'use strict';

var app = require('../../shared/app');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
	template: app.templates['spots/spot'],
	el: '#main',

	render: function () {
		console.log('Rendering spot view');

		this.$el.html(this.template({
			spot: this.model.toJSON()
		}));
	},

	initialize: function (opts) {
		console.log('Initializing spot view');

		this.model = opts.model;
	}
});