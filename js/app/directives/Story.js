// The Story directive will have an isolate scope; TopStoriesController will pass the ID of each story
// into this directive.

angular
	.module('app')
	.directive('story', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				id: '=id'
			},
			templateUrl: 'views/story.html',
			controller: function($scope, TopStoriesService) {
				var vm = this

				TopStoriesService
					.getStory($scope.id)
					.then(function(res) {
						console.log(res.data)
						vm.story = res.data
					})
			},
			controllerAs: 'vm',
			link: function(scope, elem, attrs) {

			}
		}
	})