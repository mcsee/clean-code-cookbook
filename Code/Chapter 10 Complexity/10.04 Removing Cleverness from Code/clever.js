function primeFactors(n) {
  var f = [],  i = 0, d = 2;  
  
  for (i = 0; n >= 2; ) {
     if(n % d == 0) {
       f[i++]=(d); 
       n /= d;
    }
    else {
      d++;
    }     
  }
  return f;
}