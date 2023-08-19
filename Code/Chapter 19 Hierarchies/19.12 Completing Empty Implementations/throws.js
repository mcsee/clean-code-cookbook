class MerchantProcessor {
  processPayment(amount) {
    throw new Error('Should be overridden');
  }
}

class MockMerchantProcessor extends MerchantProcessor {
  processPayment(amount) {
     throw new Error('Will be implemented when needed');
  }
}

// or better...

class MockMerchantProcessor extends MerchantProcessor {
  processPayment(amount) {
    console.log('Mock payment processed: $${amount}');
  }
}

