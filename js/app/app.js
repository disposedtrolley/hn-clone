angular
	.module('app', ['ui.router', 'angularUtils.directives.dirPagination'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top?page',
				templateUrl: 'views/top-stories.html',
				controller: 'TopStoriesController as vm'
			})
		$urlRouterProvider.otherwise('/top')
	})