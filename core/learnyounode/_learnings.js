


/* expects a file lorem.txt with the following content:

Cupcake ipsum dolor. Sit amet I love bonbon* bear claw tootsie roll jelly.* I love chocolate ice cream* chupa chups I love. Gummi bears I love wafer marzipan jujubes sweet tootsie roll bear claw. Dessert gingerbread dragée sweet roll liquorice
fruitcake marzipan donut. I love I love sugar plum marshmallow jujubes. Cotton candy jujubes oat cake chocolate cake chocolate cake marshmallow bear claw chocolate cake. Jelly cupcake gingerbread I love cupcake sesame snaps apple
pie oat cake.

*/


// process arguments

// process.argv is an array
console.log(process.argv)
// 0: node
// 1: name of program
// 2+ arguments
// arguments are strings, convert with Number(process.argv[i])

// print first argument
console.log(process.argv[2])

// file system
var fs = require('fs');
// read file into buffer
buffer = fs.readFileSync(process.argv[2]);
// convert buffer to string, split at \n, count the resulting array. this would be 'count of paragraphs'.
console.log(buffer.toString().split('\n').length);
