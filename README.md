# node-nyaa
Nysaa.se Node.js API.

For now, this will only do two things; get the latest releases and search for
releases. This is also only available in English (for now) because that's my own
primary usecase.

Feel free to use this however you like, or send me a message/mail/PR if you would
like to contribute.

## Installation

    $ npm install node-nyaa-api --save
    
## Usage

```javascript
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
```

## License

This program is licensed under the GPL-3.0 license.