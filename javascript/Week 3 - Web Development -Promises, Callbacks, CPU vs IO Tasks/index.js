const fs = require("fs"); //importing the file system module
const contents = fs.readFileSync("notes.md", "utf-8");
console.log(contents);
