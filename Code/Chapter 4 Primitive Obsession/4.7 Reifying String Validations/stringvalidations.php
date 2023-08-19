<?

// First Example: Address Validation
class Address { 
  function __construct(string $emailAddress) {
     // String validation on Address class violates SRP
     $this->validateEmail($emailAddress);
     // ...
   }
  
  private function validateEmail(string $emailAddress) {
    $regex = "/[a-zA-Z0-9_-.+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/";
    // Regex is a sample / It might be wrong
    // Emails and Urls should be first class objects

    if (!preg_match($regex, $emailAddress))
    {
      throw new Exception('Invalid email address ' . emailAddress);
    }    
  }
}

// Second Example: Wordle

class Wordle { 
  function validateWord(string $wordleword) {
    // Wordle word should be a real-world entity. Not a subset of strings
  }
 }