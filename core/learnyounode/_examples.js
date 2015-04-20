// https://github.com/maxogden/art-of-node#callbacks

// Node handles I/O with: callbacks, events, streams and modules.


var fs = require('fs');


module.exports.parseFile = function(filepath, options) {
  readFile(filepath, finishedReading);
};


function readFile(filepath, cb) {
  fs.readFile(filepath, cb)
}


function finishedReading(error, fileData) {
  if (error) return console.error(error)
  // do something with the movieData
  // make object with the file data:

  var fileObject = {
    filename: process.argv[2],
    buffer: fileData,
    string: fileData.toString()
  }
  console.log(fileObject);
}



if (process.argv[2]) {
  fs.readFile(process.argv[2], finishedReading)
} else {
  console.log('please provide an argument')
}




// var fs = require('fs')
// var myNumber = undefined

// function addOne(callback) {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//     callback()
//   })
// }

// function logMyNumber() {
//   console.log(myNumber)
// }

// addOne(logMyNumber)