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
		templateUrl: 'app/components/top-story/top-story.html',
		controller: StoryController,
		controllerAs: 'vm',
		link: linkFunc
	}

	return directive

	function linkFunc(scope, elem, attrs) {
		const hideLink = elem[0].querySelector('.hide')
		hideLink.addEventListener('click', function(evt) {
			elem.parent().remove()
		})

		const index = attrs.index
		scope.index = index

		scope.$on('$destroy', function() {
			elem.off()
		})
	}
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
			vm.score = vm.story.score
			vm.author = vm.story.by
			vm.time = TopStoriesService.getHoursAgo(vm.story.time)
			vm.numComments = vm.story.descendants
		})
}