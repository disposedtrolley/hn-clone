// The Story directive will have an isolate scope; TopStoriesController will pass the ID of each story
// into this directive.

(function() {
	'use strict'

	angular
		.module('app')
		.directive('story', story)
	
	story.$inject = ['TopStoriesService', 'getTimeAgoFilter', 'getDomainFromUrlFilter']
	function story(TopStoriesService, getTimeAgoFilter, getDomainFromUrlFilter) {
		const directive = {
			bindToController: true,
			controller: StoryDirectiveController,
			controllerAs: 'vm',
			link: linkFunc,
			templateUrl: 'app/shared/story/story.html',
			restrict: 'E',
			scope: {
				storyId: '=id'
			},
		}
	
		return directive

		function linkFunc(scope, elem, attrs) {
			const hideLink = elem[0].querySelector('.hide')
			hideLink.addEventListener('click', function(evt) {
				elem.parent().remove()
			})
	
			scope.$on('$destroy', function() {
				elem.off()
			})
		}
	}

	function StoryDirectiveController(TopStoriesService, getTimeAgoFilter, getDomainFromUrlFilter) {
		let vm = this

		vm.$onInit = function() {
			TopStoriesService
				.getStory(vm.storyId)
				.then(function(res) {
					vm.story = res.data
					vm.title = vm.story.title
					vm.url = vm.story.url
					if (!vm.url) vm.url = 'https://news.ycombinator.com/item?id=' + vm.story.id
					vm.domain = getDomainFromUrlFilter(vm.url)			
					vm.score = vm.story.score
					vm.author = vm.story.by
					vm.time = getTimeAgoFilter(vm.story.time)
					vm.numComments = vm.story.descendants
				})
		}
	}
})()