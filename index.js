var Styliner = require('styliner');
var styliner = new Styliner(__dirname + '/html');
var fs = require('fs');

var originalSource = fs.readFileSync(__dirname + '/index.html', 'utf8');

styliner.processHTML(originalSource)
        .then(function(processedSource) {
            fs.writeFileSync('ready.html', processedSource);
        });