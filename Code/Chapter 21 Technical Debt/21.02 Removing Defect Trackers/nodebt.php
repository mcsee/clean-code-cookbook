<?

function integerDivide($numerator, $denominator) {
  if (denominator == 0) {
    throw new DivideByZero();
  }
  return $numerator / $denominator;  
}

// You pay your debts