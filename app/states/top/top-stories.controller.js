(function() {
	'use strict'

	angular
		.module('app')
		.controller('TopStoriesController', TopStoriesController)
	
	// dependency injection done in this fashion so it doesn't break when minified
	TopStoriesController.$inject = ['TopStoriesService', '$scope', '$stateParams', '$location']

	function TopStoriesController(TopStoriesService, $scope, $stateParams, $location) {
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
				$location.url('top?page=' + newPageNumber)
				vm.start = 30 * (newPageNumber - 1) + 1
			}
		}
	}
})()