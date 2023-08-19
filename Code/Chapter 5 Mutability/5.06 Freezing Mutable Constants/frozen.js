export const ALL_CONSTANTS = Object.freeze({
  DISCOUNT: Object.freeze({
    PLATINUM = 0.1;
    GOLD = 0.05;
    SILVER = 0.02;  
  }),
});

const ALL_CONSTANTS = 3.14; // Error

ALL_CONSTANTS.DISCOUNT.PLATINUM = 0.12; // ERROR

// Code works, but it is coupled and we cannot test it

Class TaxesProvider {
  applyPlatinum(product);
}

// Now we can couple to a interface (the protocol of taxes provider)
// Since class has no setters it is constant an immutable
// And we can replace it on tests