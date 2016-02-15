'use strict';

var app = require('./app');
var Backbone = require('backbone');
var Spot = require('../models/spot');
var SpotCollection = require('../models/spot_collection');
var HomeView = require('../views/main/home');
var HeaderView = require('../views/main/header');
var FooterView = require('../views/main/footer');
var SpotView = require('../views/spots/spot');
var SpotAddView = require('../views/spots/add');

module.exports = Backbone.Router.extend({
	routes: {
		'home(/)': 'home',
		'spots/add(/)': 'add',
		'spots/:id': 'spot'
	},

	home: function () {
		console.log('Routed to home');

		if (!app.views.header) {
			app.views.header = new HeaderView();
			app.views.header.render();
		}
		if (!app.views.footer) {
			app.views.footer = new FooterView();
			app.views.footer.render();
		}

		if (app.views.main) app.views.main.undelegateEvents();

		app.spots = app.spots || new SpotCollection();
		app.spots.fetch(function () {
			app.views.main = new HomeView();
			app.views.main.render();
		});
	},

	spot: function (id) {
		console.log('Routed to spot ' + id);

		var spot = app.spots.where({_id: id})[0];

		if (app.views.main) app.views.main.undelegateEvents();

		app.views.main = new SpotView({
			model: spot
		});
		app.views.main.render();
	},

	add: function () {
		console.log('Routed to add');

		if (app.views.main) app.views.main.undelegateEvents();

		app.views.main = new SpotAddView();
		app.views.main.render();
	}
});