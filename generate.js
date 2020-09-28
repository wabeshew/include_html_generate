// require
const ejs = require("ejs");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync(__dirname + "/data/data.json", "utf8"));
const template = ejs.compile(fs.readFileSync(__dirname + "/template/index.ejs", "utf8"));

for (let i = 0; i < data.length; i++) {
    let currentdata = data[i];
    let result = template(currentdata);
    fs.writeFile(__dirname + "/dist/" + currentdata.filename + ".html", result, function(err) {
        if (err) {
            console.log("Error!!");
            throw err;
        }
    });
}

console.log("Complete!!");
