var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    else { console.log(data.toString()); 