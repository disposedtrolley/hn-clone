(function() {
	'use strict'

	angular
		.module('app')
		.controller('TopStoriesController', TopStoriesController)
	
	// dependency injection done in this fashion so it doesn't break when minified
	TopStoriesController.$inject = ['TopStoriesService']

	function TopStoriesController(TopStoriesService) {
		var vm = this
		vm.stories = []

		activate()

		function activate() {
			TopStoriesService
				.getStories()
				.then(function(res) {
					vm.stories = res.data
				})
		}
	}
})()