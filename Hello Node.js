const fs = require("fs")

fs.writeFileSync("welcome.txt", "Hello Node")
console.log("File created.")

const fs = require("fs")

const data = fs.readFileSync("welcome.txt", "utf8")
console.log(data)