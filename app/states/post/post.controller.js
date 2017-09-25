(function() {
	'use strict'

	angular
		.module('app')
		.controller('PostController', PostController)
	
	PostController.$inject = ['TopStoriesService', '$stateParams']
	function PostController(TopStoriesService, $stateParams) {
		let vm = this

		activate()

		vm.id = $stateParams.id

		function activate() {

		}
	}
})()