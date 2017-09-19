angular
	.module('app', ['ui.router'])
	.config(function($stateProvider) {
		$stateProvider
			.state('top', {
				url: '',
				templateUrl: 'views/top-stories.html',
				controller: 'TopStoriesController as vm'
			})
	})