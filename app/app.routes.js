angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top?page',
				templateUrl: 'app/states/top/top-stories.html',
				controller: 'TopStoriesController as vm'
			})
		$urlRouterProvider.otherwise('/top')
	})