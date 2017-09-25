angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top?page',
				templateUrl: 'app/routes/story-top/story-top.html',
				controller: 'StoryTopController as vm'
			})
			.state('post', {
				url: '/post?id',
				templateUrl: 'app/routes/story-detail/story-detail.html',
				controller: 'StoryDetailController as vm',
				resolve: {
					story: function(TopStoriesService, $stateParams) {
						return TopStoriesService.getStory($stateParams.id)
					}
				}
			})
		$urlRouterProvider.otherwise('/top')
	})