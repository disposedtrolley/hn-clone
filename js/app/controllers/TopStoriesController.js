(function() {
	'use strict'

	angular
		.module('app')
		.controller('TopStoriesController', TopStoriesController)
	
	// dependency injection done in this fashion so it doesn't break when minified
	TopStoriesController.$inject = ['TopStoriesService', '$scope', '$stateParams']

	function TopStoriesController(TopStoriesService, $scope, $stateParams) {
		var vm = this
		vm.stories = []
		vm.start

		activate()

		function activate() {
			vm.stories = []
			vm.currentPage = $stateParams.page || 1			
			vm.updatePage = updatePage
			vm.updatePage(vm.currentPage)

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