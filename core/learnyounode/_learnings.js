// expects a file lorem.txt. see end of file.


var fs = require('fs');



// filter folder for extension

// expects different input with path and filtered extension, eg: node filteredls.js . js

// var fs = require('fs')
// var path = require('path')
// fs.readdir(process.argv[2], function callback (err, list) {
//   list.forEach(function (item) {
//     if ( path.extname(item) ==  '.' + process.argv[3] ) {
//       console.log(item);
//     }
//   })
// })




// async:

buffer = fs.readFile(process.argv[2], tellLines)
// taking err and data is standard/idiomatic. but: how do i pass additional data? may/should I not do that?
function tellLines (err, data) {
  var lines = data.toString().split('\n').length -1
  console.log('lines: '+lines)
}

// process arguments, sync

// process.argv is an array
console.log('process.argv: '+process.argv)
// 0: node
// 1: name of program
// 2+ arguments
// arguments are strings, convert with Number(process.argv[i])

// print first argument
console.log('process.argv[2]: '+process.argv[2])

// file system
var fs = require('fs');
// read file into buffer
buffer = fs.readFileSync(process.argv[2]);
// convert buffer to string, split at \n, count the resulting array. this would be 'count of paragraphs'.
console.log('lines(not -1): '+buffer.toString().split('\n').length);






// https://github.com/maxogden/art-of-node#callbacks

// Node handles I/O with: callbacks, events, streams and modules.





/* content of lorem.txt:

Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi bears I love wafer marzipan jujubes sweet tootsie roll bear claw. Dessert gingerbread dragée sweet roll liquorice
fruitcake marzipan donut. I love I love sugar plum marshmallow jujubes. Cotton candy jujubes oat cake chocolate cake chocolate cake marshmallow bear claw chocolate cake. Jelly cupcake gingerbread I love cupcake sesame snaps apple
pie oat cake.

*/
