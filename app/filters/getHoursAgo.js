angular
	.module('app')
	.filter('getHoursAgo', getHoursAgo);
	
function getHoursAgo() {
	return function(input) {
		if (!isNaN(parseFloat(input)) && isFinite(input)) {
			const secondDifference = (Date.now()/1000) - input

			if (secondDifference < 3600) {
				const minutesAgo = secondDifference/60
				return Math.floor(minutesAgo) + ' minutes ago'
			} else {
				const hoursAgo = secondDifference/3600
				return Math.floor(hoursAgo) + ' hours ago'
			}
		} else {
			throw new Error('getHoursAgoFilter must be given a number as an input.');
		}
	};
};