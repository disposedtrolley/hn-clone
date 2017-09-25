(function() {
	'use strict'

	angular
		.module('app')
		.controller('PostController', PostController)
	
	PostController.$inject = ['TopStoriesService', '$stateParams']
	function PostController(TopStoriesService, $stateParams) {
		let vm = this
		vm.id
		vm.story
		vm.comments

		activate()

		function activate() {
			vm.id = $stateParams.id

			TopStoriesService
				.getStory(vm.id)
				.then(function(res) {
					vm.story = res.data
					vm.comments = res.data.kids
				})
		}
	}
})()