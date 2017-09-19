// The Story directive will have an isolate scope; TopStoriesController will pass the ID of each story
// into this directive.

angular
	.module('app')
	.directive('story', story)

function story() {
	const directive = {
		restrict: 'E',
		replace: true,
		scope: {
			id: '=id'
		},
		templateUrl: 'views/story.html',
		controller: StoryController,
		controllerAs: 'vm',
		link: linkFunc
	}

	return directive

	function linkFunc(scope, elem, attrs, ctrl) { }
}

StoryController.$inject = ['$scope', 'TopStoriesService']

function StoryController($scope, TopStoriesService) {
	var vm = this

	TopStoriesService
		.getStory($scope.id)
		.then(function(res) {
			vm.story = res.data
			vm.title = vm.story.title
			vm.url = vm.story.url
		})
}