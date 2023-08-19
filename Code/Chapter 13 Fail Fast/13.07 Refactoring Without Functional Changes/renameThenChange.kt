getFactorial(n) {
  return n * getFactorial(n);
}

// Change

getFactorial(n) {
  return n * getFactorial(n-1);
}

// Run the tests

factorial(n) {
  return n * factorial(n-1);
}

// Rename