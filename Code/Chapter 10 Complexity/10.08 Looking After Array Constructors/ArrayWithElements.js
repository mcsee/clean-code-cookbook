const arrayWithTwoElements = new Array(3, 1);

console.log(arrayWithTwoElements); // [ 3, 1 ]
console.log(arrayWithTwoElements[0]); // 3
console.log(arrayWithTwoElements[1]); // 1
console.log(arrayWithTwoElements[2]); // Undefined
console.log(arrayWithTwoElements[5]); // Undefined (should be out of range)
console.log(arrayWithTwoElements.length); // 2

const arrayWithTwoElementsLiteral = [3,1];

console.log(arrayWithTwoElementsLiteral); // [ 3, 1 ]
console.log(arrayWithTwoElementsLiteral[0]); // 3
console.log(arrayWithTwoElementsLiteral[1]); // 1
console.log(arrayWithTwoElementsLiteral[2]); // Undefined
console.log(arrayWithTwoElementsLiteral[5]); // Undefined
console.log(arrayWithTwoElementsLiteral.length); // 2