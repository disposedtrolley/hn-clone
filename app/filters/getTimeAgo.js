angular
	.module('app')
	.filter('getTimeAgo', getTimeAgo);
	
function getTimeAgo() {
	return function(input) {
		if (!isNaN(parseFloat(input)) && isFinite(input)) {
			const secondDifference = (Date.now()/1000) - input

			if (secondDifference < 3600) {
				const minutesAgo = secondDifference/60
				return pluralizeTime(Math.floor(minutesAgo), 'minute')
			} else if (3600 <= secondDifference && secondDifference < 86400) {
				const hoursAgo = secondDifference/3600
				return pluralizeTime(Math.floor(hoursAgo), 'hour')
			} else if (86400 <= secondDifference && secondDifference < 604800) {
				const daysAgo = secondDifference/86400
				return pluralizeTime(Math.floor(daysAgo), 'day')
			} else if (604800 <= secondDifference && secondDifference < 2678400) {
				const weeksAgo = secondDifference/604800
				return pluralizeTime(Math.floor(weeksAgo), 'week')
			} else if (2678400 <= secondDifference && secondDifference < 31536000) {
				const monthsAgo = secondDifference/2678400
				return pluralizeTime(Math.floor(monthsAgo), 'month')
			} else {
				const yearsAgo = secondDifference/31536000
				return pluralizeTime(Math.floor(yearsAgo), 'year')
			}				
		} else {
			throw new Error('getTimeAgoFilter must be given a number as an input.')
		}
	}
	function pluralizeTime(time, timeUnit) {
		if (time === 1) {
			return time + ' ' + timeUnit + ' ago'
		} else {
			return time + ' ' + timeUnit + 's ago'
		}
	}		
}