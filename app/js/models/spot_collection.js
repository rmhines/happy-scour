'use strict';

var $ = require('jquery');
var app = require('../shared/app');
var Backbone = require('backbone');
var Spot = require('./spot');

module.exports = Backbone.Collection.extend({
	model: Spot,
	url: app.config.host + '/spots',

	fetch: function (callback) {
		callback = typeof callback === 'function' ? callback : function () {};

		var _this = this;

		$.getJSON(this.url).done(function (data) {
			_this.set(_this.parse(data));
			window.localStorage.setItem('spots', JSON.stringify(data));
			callback();
		}).fail(function () {
			if (_this.loadFromCache()) {
				callback();
			}
		});
	},

	loadFromCache: function () {
		var cached = JSON.parse(window.localStorage.getItem('spots'));
		if (cached) {
			this.set(this.parse(cached));
			return true;
		}
		return false;
	},

	initialize: function () {
		console.log('Initializing spots collection');
	}
});