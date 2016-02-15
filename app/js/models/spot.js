'use strict';

var app = require('../shared/app');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	idAttribute: '_id',

	url: function () {
		return app.config.host + '/spots';
	},

	initialize: function () {
		console.log('Initializing spot ' + this.get('name'));
	}
});

window.Spot = module.exports;