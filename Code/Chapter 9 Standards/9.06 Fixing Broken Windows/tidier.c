int multiply(int firstMultiplier, int secondMultiplier) {
  int product = 0; 
  for(int currentIndex=0; currentIndex<secondMultiplier; currentIndex++) {
    product += firstMultiplier; 
  }
  return product; 
} 

// or just multiply them :)