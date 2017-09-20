(function() {
	'use strict'

	angular
		.module('app')
		.controller('TopStoriesController', TopStoriesController)
	
	// dependency injection done in this fashion so it doesn't break when minified
	TopStoriesController.$inject = ['TopStoriesService', '$scope']

	function TopStoriesController(TopStoriesService, $scope) {
		var vm = this
		vm.stories = []
		vm.start

		activate()

		function activate() {
			vm.stories = []
			$scope.updatePage = updatePage

			TopStoriesService
				.getStories()
				.then(function(res) {
					vm.stories = res.data
				})
			
			function updatePage(newPageNumber, oldPageNumber) {
				vm.start = 30 * (newPageNumber - 1) + 1
				console.log(vm.start)
			}
		}
	}
})()