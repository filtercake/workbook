// filteredls.js

var debugMode = false;
function debuggity (name, value) {
  if ( debugMode == true ) {
    console.log(name + ': ' + value)
  }
}


var path = require('path')
var fs = require('fs')


// console.log('dings: ' + dings)

var argvPath = process.argv[2]
var ext  = process.argv[3]
var dottedExt  = '.' + process.argv[3]



debuggity('argvPath', argvPath)
debuggity('ext', ext)

fs.readdir(process.argv[2], function callback (err, list) {
  // for each entry of list
  debuggity('list', list)
  list.forEach(function (item) {
    debuggity('item', item)
    debuggity('path.extname(item)', path.extname(item))
    // if ext matches process.argv[3]
    if ( path.extname(item) ==  dottedExt ) {
      console.log(item);
    }


  })
  //

    // if ext matches process.argv[3]
    // if path.extname(entry)
      // console.log(entry)
})

// console.log(path, ext)

// path.extname(entry)
// // returns
// '.html'