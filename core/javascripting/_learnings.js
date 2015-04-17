
// LOGIC
// if
var fruit = 'orange';
if (fruit.length > 5) {
    console.log('The fruit name has more than five characters.');
} else {
    console.log('The fruit name has five characters or less.');
};

// for
var total = 0;
var limit = 10;
for (var i = 0; i < limit; i++) {
    total += i;
};
console.log(total);
// note: starting at 0 => i < 10 => still 10 runs but different result than starting at 1 and i <= 10



// number to string
var n = 128;
console.log(n.toString());

// length of string
var example = 'example string';
console.log( example.length );

// replace parts of string
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log( pizza );


/// MATH
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
