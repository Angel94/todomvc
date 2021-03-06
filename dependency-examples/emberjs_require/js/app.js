// Define libraries
require.config({
	baseUrl: 'js/',
	paths: {
		jquery: '../../../assets/jquery.min',
		// ember: 'http://cloud.github.com/downloads/emberjs/ember.js/ember-latest.min',
		ember: 'lib/ember-latest',
		text: 'lib/require/text',
		jasmine: '../../../assets/jasmine/jasmine',
		jasmine_html: '../../../assets/jasmine/jasmine-html'
	}
});

// Load our app
define( 'app', [
	'app/router',
	'app/models/store',
	'app/controllers/entries',
	'app/views/application',
	'jquery',
	'ember'
	], function( Router, Store, EntriesController, ApplicationView ) {
		var App = Ember.Application.create({
			VERSION: '0.2',
			rootElement: '#todoapp',
			// Load routes
			Router: Router,
			// Extend to inherit outlet support
			ApplicationController: Ember.Controller.extend(),
			ApplicationView: ApplicationView,
			entriesController: EntriesController.create(
				{ store: new Store( 'todos-emberjs' ) }
			)
		});

		App.initialize();
		// Expose the application globally
		return window.Todos = App;
	}
);
