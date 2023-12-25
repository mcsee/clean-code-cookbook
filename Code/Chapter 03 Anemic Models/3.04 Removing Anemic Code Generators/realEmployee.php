<?

final class Employee {
    private $name;
    private $workingStatus;

    public function __construct(string $name, WorkingStatus $workingStatus) {
        // Constructor and initialization code goes here
    }

    public function name(): string {
         return $this->name;
         // This is not a getter.
         // It is Employee’s responsibility to tell her/his name
         // Accidentally, 
         // you have implemented an attribute with the same name
    }
}

// You have no magic setters or getters
// all methods are real and can be debugged
// Validations are implicit 
// since the WorkingStatus object is valid by construction

$john = new Employee('John', new HiredWorkingStatus());

$john->name(); // returns 'John'