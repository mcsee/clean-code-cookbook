const invoice = isCreditCard ? 
  prepareInvoice();
  fillItems();
  validateCreditCard();
  addCreditCardTax();
  fillCustomerDataWithCreditCard();
  createCreditCardInvoice() 
:
  prepareInvoice();
  fillItems();
  addCashDiscount();
  createCashInvoice();

// The intermediate results are not considered
// The value of the invoice is the result of
// the last execution