public class MY_Account {
 // This class name has a different case and underscores

 private Statement privStatement; 
 // Attributes have visibility prefixes
	
	   private Amount currentbalance = amountOf(0);

 public SetAccount(Statement statement) {
   this.statement = statement;
 }
 // Setters and getters are not normalized
	
public GiveAccount(Statement statement) 
{ this.statement = statement; }
// Indentation is not uniform

public void deposit(Amount value, Date date) {
  recordTransaction(
	  value, date);
  // some variables are named after type and not role.
 } 

public void extraction(Amount value, Date date) {
  recordTransaction(value.negative(), date);
  // the opposite of *deposit* should be withdrawal
	}

public void voidPrintStatement(PrintStream printer) 
{
  statement.printToPrinter(printer);
  // Name is redundant
}

private void privRecordTransactionAfterEnteredthabalance(Amount value, Date date) {
  Transaction transaction = new Transaction(value, date);
  Amount balanceAfterTransaction = transaction.balanceAfterTransaction(balance);
  balance = balanceAfterTransaction;
  statement.addANewLineContainingTransation(transaction, balanceAfterTransaction);
  // naming is not uniform
  // wrapped lines are not consistent	
 }	
}