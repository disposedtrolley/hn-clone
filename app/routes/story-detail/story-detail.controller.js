(function() {
	'use strict'

	angular
		.module('app')
		.controller('StoryDetailController', StoryDetailController)
	
	StoryDetailController.$inject = ['TopStoriesService', '$stateParams', 'story']
	function StoryDetailController(TopStoriesService, $stateParams, story) {
		let vm = this
		vm.id
		vm.story
		vm.comments

		activate()

		function activate() {
			vm.id = $stateParams.id
			vm.story = story.data
			vm.comments = story.data.kids
		}
	}
})()