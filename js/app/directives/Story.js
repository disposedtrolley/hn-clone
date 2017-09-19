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
	let vm = this

	function getDomainFromUrl(url) {
		let domain = null
		let a = document.createElement('a')
		a.setAttribute('href', url)
		a.hostname === 'news.ycombinator.com' ? domain = '' : domain = '(' + a.hostname + ')'
		return domain
	}

	TopStoriesService
		.getStory($scope.id)
		.then(function(res) {
			vm.story = res.data
			vm.title = vm.story.title
			vm.url = vm.story.url
			if (!vm.url) vm.url = 'https://news.ycombinator.com/item?id=' + vm.story.id
			vm.domain = getDomainFromUrl(vm.url)			
		})
}