angular
	.module('app')
	.filter('getDomainFromUrl', getDomainFromUrl);
	
	function getDomainFromUrl() {
		return function(input) {
			if (input.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)) {
				let domain = null
				const a = document.createElement('a')
				a.setAttribute('href', input)
				a.hostname === 'news.ycombinator.com' ? domain = '' : domain = '(' + a.hostname + ')'
				return domain
			} else {
				throw new Error('getDomainFromUrlFilter must be given a URL as an input.');
			}
		};
	};