$ npm install --save is-odd

// https://www.npmjs.com/package/is-odd
// This package has about 500k weekly downloads

module.exports = function isOdd(value) {
  const n = Math.abs(value); 
  return (n % 2) === 1;
};