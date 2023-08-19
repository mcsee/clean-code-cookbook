function primeFactors(numberToFactor) {
  var factors = [], 
      divisor = 2,
      remainder = numberToFactor;
  
  while(remainder>=2) {
    if(remainder % divisor === 0) {
       factors.push(divisor); 
       remainder = remainder / divisor;
    }
    else {
      divisor++;
    }     
  }
  return factors;
}