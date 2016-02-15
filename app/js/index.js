'use strict';

var $ = window.jQuery = window.$ = require('jquery');
var app = window.app = require('./shared/app');
var Router = require('./shared/router');
var Backbone = require('backbone');

Backbone.$ = $;

window.location.hash = '';
app.router = new Router();
Backbone.history.start({
	pushState: false,
	silent: true
});
app.router.navigate('home', { trigger: true });