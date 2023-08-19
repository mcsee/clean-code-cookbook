try {
    transaction.commit();
} catch (transactionError) {
    this.withTransactionErrorDo(
        transationError, transaction);
}

// transaction error policy is not defined in this function
// so we don't have repeated code
// code is more readable
// It is up to the transaction
// and the error to decide what to do