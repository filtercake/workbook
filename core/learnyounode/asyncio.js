// asyncio.js

var fs = require('fs')



buffer = fs.readFile(process.argv[2], tellLines)

function tellLines (err, data) {
  var lines = data.toString().split('\n').length -1
  console.log(lines)
}
