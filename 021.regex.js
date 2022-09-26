let pattern=/xyz/;

let value="this is a xyz test"
console.log(pattern.test(value))//true,,,it returs boolean bcz it has xyz word in that

console.log(value.replace(pattern, 'just'))//this is a just test

console.log(value.match(pattern))// [ 'xyz', index: 10, input: 'this is a xyz test', groups: undefined ]
//this checks value has pattern word at which index etc stuff
let match=value.match(pattern);
console.log(match.index)//10