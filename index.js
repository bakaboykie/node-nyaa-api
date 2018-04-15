var request = require('request');
var feed = require("feed-read");

var Nyaa = (function() {

	if (!Object.entries) {
		Object.prototype.entries = (obj) => {
			let arr = [];
			for (var key in obj)
				arr.push([key, obj[key]]);
			return arr;
		};
	}

	var queryDefault = {
		filter: '0', // No filter
		category: '0_0' // All categories
	};
	
    var _getLatest = function(obj, callback) {
		feed('http://www.nyaa.si/?page=rss&f=' + (obj.filter || queryDefault.filter) + '&c=' + (obj.category || queryDefault.category), (typeof obj === 'object' && obj !== null) ? callback : obj);
    };
    var _search = function(term, callback) { // simplify
		let url = 'https://nyaa.si/?page=rss&';
		url += Object.entries({
			c: term.category || queryDefault.category,
			f: term.filter || queryDefault.filter,
			q: term.term.split(' ').join('+') || term.split(' ').join('+')
		})
		.map(entry => {
			return entry.join('=');
		}).join('&');
		feed(url, callback);
    };

    return {
        get_latest: _getLatest,
        search: _search,
    };
})();

module.exports = Nyaa;
