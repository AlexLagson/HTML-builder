
const fs = require("fs");
const { stdout } = require("process");
const myReadStream = fs.createReadStream(__dirname + `/text.txt`, "UTF8");
myReadStream.on("data", function (chunk) {
    stdout.write(chunk);
    });

