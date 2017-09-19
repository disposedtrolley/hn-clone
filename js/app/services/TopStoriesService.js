(function() {
	'use strict'

	angular
		.module('app')
		.service('TopStoriesService', TopStoriesService)
	
	TopStoriesService.$inject = ['$http']

	function TopStoriesService($http) {
		this.getStories = getStories
		this.getStory = getStory

		function getStories() {
			return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
		}

		function getStory(id) {
			return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
		}
	}
})()