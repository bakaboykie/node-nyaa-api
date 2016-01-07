var request = require('request');
var feed = require("feed-read");

var Nyaa = (function() {

    var _getLatest = function(callback) {
        feed('http://www.nyaa.se/?page=rss&cats=1_37', callback);
    };

    var _search = function(term, callback) {
        var url = 'http://www.nyaa.se/?page=rss&cats=1_37&filter=0&term=';
        url = url + term.split(' ').join('+');
        feed(url, callback);
    };

    return {
        get_latest: _getLatest,
        search: _search,
    };
})();

module.exports = Nyaa;