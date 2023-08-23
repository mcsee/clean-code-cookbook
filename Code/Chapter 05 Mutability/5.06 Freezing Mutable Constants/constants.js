const DISCOUNT_PLATINUM = 0.1;
const DISCOUNT_GOLD = 0.05;
const DISCOUNT_SILVER = 0.02;

// Since variables are constants we cannot reassign them
const DISCOUNT_PLATINUM = 0.05; // Error

// We can group them
const ALL_CONSTANTS = {
  DISCOUNT: {
    PLATINUM = 0.1;
    GOLD = 0.04;
    SILVER = 0.02;  
  },
};

const ALL_CONSTANTS = 3.14; // Error

ALL_CONSTANTS.DISCOUNT.PLATINUM = 0.08; // NOT AN ERROR. OOPS!

const ALL_CONSTANTS = Object.freeze({
  DISCOUNT: 
    PLATINUM = 0.1;
    GOLD = 0.05;
    SILVER = 0.02; 
});

const ALL_CONSTANTS = 3.14; // Error

ALL_CONSTANTS.DISCOUNT.PLATINUM = 0.12; // NOT AN ERROR. OOPS!