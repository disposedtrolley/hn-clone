angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top?page',
				templateUrl: 'app/states/top/top-stories.html',
				controller: 'TopStoriesController as vm'
			})
			.state('post', {
				url: '/post?id',
				templateUrl: 'app/states/story/story.html',
				controller: 'StoryController as vm',
				resolve: {
					story: function(TopStoriesService, $stateParams) {
						return TopStoriesService.getStory($stateParams.id)
					}
				}
			})
		$urlRouterProvider.otherwise('/top')
	})