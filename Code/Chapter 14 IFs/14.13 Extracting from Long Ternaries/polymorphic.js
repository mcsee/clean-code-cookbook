const invoice = isCreditCard ? 
                    createCreditCardInvoice() :
                    createCashInvoice();

// or better... 

if (isCreditCard) {
  const invoice = createCreditCardInvoice();
} else {
  const invoice = createCashInvoice();
}

// Even better with polymorphism...

const invoice = paymentMethod.createInvoice();