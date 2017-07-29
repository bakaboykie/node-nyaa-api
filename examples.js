var Nyaa = require('node-nyaa-api');


Nyaa.get_latest(function(err, articles) {
    if (err) throw err;

    console.log(articles);
});


Nyaa.search('danshi nichijou', function(err, articles) {
    if (err) throw err;

    for (var article in articles)
        console.log(articles[article].title);
});

// Proposed
Nyaa.search({
    category: '1_4', // RAWs
    filter: 2, // Trusted only
    term: 'Neon Genesis Evangelion'
}, function(err, articles) {
    // ...
});
