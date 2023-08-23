class Decimal {
  constructor(numerator) {
    this.numerator = numerator;    
  }
   plus(anotherDecimal) {
      return new Decimal(this.numerator + anotherDecimal.numerator);
  }
   toString() {
      return "0." + this.numerator;
   }}     
  
console.log((new Decimal(2).plus(new Decimal(1))).toString());
// 0.3

// You can represent the numbers 
// with a Decimal class (storing only the numerator)
// or with a generic Fraction class (storing both the numerator and denominator)