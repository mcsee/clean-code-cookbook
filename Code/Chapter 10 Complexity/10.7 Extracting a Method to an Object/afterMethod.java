class BlockchainAccount {
  // ...
  public double balance() {
    return new BalanceCalculator(this).netValue();
  }
}

// 1. Create an object to represent an invocation of the method
// 2. Move the big method to the new object
// 3. Convert the temporary variables of the method into private attributes.
// 4. Break the big method in the new object by using The Extract Method
// 5. Remove parameters from method invocation by also converting them to private attributes 


class BalanceCalculator {
  private string address;
  private BlockchainAccount account;
  
  public BalanceCalculator(BlockchainAccount account) {
    this.account = account;
  }
  
  public double netValue() {
    this.findStartingBlock();
    //...
    this computeTransactions();
  }
}