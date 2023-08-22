const arrayWithFixedLength = new Array(3);

console.log(arrayWithFixedLength); // [ <5 empty items> ]
console.log(arrayWithFixedLength[0]); // Undefined
console.log(arrayWithFixedLength[1]); // Undefined
console.log(arrayWithFixedLength[3]); // Undefined
console.log(arrayWithFixedLength[4]); // Undefined too
// But should be Index out of range
console.log(arrayWithFixedLength.length); // 3