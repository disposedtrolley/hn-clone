(function() {
	'use strict'

	const StoryComment = {
		bindings: {
			id: '='		// set up two-way data binding
		},
		templateUrl: 'app/components/story-comment/story-comment.html',
		controller: StoryCommentController,
		controllerAs: 'vm'
	}

	StoryCommentController.$inject = ['TopStoriesService']
	function StoryCommentController(TopStoriesService) {
		let vm = this
		vm.commentText
		vm.commentAuthor
		vm.commentTime

		vm.$onInit = function() {
			TopStoriesService
				.getStory(vm.id)
				.then(function(res) {
					vm.commentText = res.data.text
					vm.commentAuthor = res.data.by
					vm.commentTime = TopStoriesService.getHoursAgo(res.data.time)
				})
		}
	}

	angular
	.module('app')
	.component('storyComment', StoryComment)	// first parameter must be camelCased
})()