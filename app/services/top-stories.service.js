(function() {
	'use strict'

	angular
		.module('app')
		.service('TopStoriesService', TopStoriesService)
	
	TopStoriesService.$inject = ['$http']

	function TopStoriesService($http) {
		this.getStories = getStories
		this.getStory = getStory
		this.getHoursAgo = getHoursAgo

		function getStories() {
			return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
		}

		function getStory(id) {
			return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
		}

		function getHoursAgo(seconds) {
			const secondDifference = (Date.now()/1000) - seconds
	
			if (secondDifference < 3600) {
				const minutesAgo = secondDifference/60
				return `${Math.floor(minutesAgo)} minutes ago`
			} else {
				const hoursAgo = secondDifference/3600
				return `${Math.floor(hoursAgo)} hours ago`
			}
		}
	}
})()