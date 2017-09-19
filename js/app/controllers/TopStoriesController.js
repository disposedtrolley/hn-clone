(function() {
	'use strict'

	angular
		.module('app')
		.controller('TopStoriesController', TopStoriesController)
	
	// dependency injection done in this fashion so it doesn't break when minified
	TopStoriesController.$inject = []

	function TopStoriesController() {
		var vm = this

		activate()

		function activate() {
			vm.stories = ['1', '2']
		}
	}
})()