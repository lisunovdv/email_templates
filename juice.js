var juice = require('juice');
var fs = require('fs');
var source = fs.readFileSync('index.html', 'utf8')
var result = juice(source);
fs.writeFileSync('juice-ready.html', result);