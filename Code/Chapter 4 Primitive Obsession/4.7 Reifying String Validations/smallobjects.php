<?

//First Example: Address Validation
class Address { 
  function __construct(EmailAddress $emailAddress) {
     // Email is always valid / Code is cleaner
     // ...
   }
}
  
class EmailAddress { 
  // We can reuse this object many times avoiding copy-pasting
  string $address; 
  private function __construct(string $emailAddress) {
    $regex = "/[a-zA-Z0-9_-.+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/";
    // Regex is a sample / It might be wrong
    // Emails and Urls are first class objects

    if (!preg_match($regex, $emailAddress))
    {
      throw new Exception('Invalid email address ' . emailAddress);
    }   
    $this->address = $emailAddress;
  }
}

// Second Example: Wordle

class Wordle { 
  function validateWord(WordleWord $wordleword) {
    // Wordle word is a real-world entity. Not a subset of string
  }
 }

class WordleWord { 
  function __construct(string $emailAddress) {
    // Avoid building invalid world words
    // For example length != 5
  }
 }