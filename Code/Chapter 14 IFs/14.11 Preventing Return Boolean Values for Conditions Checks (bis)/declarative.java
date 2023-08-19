boolean isEven(int numberToCheck) {
  // We decouple the what (to check for even or odd)
  // With how (the algorithm)
  return (numberToCheck % 2 == 0);     
}