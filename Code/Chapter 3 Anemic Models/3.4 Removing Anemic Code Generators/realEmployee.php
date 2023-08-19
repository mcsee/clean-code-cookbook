<?

final class Employee {
    private $name;
    private $workingStatus;

    public function __construct(string $name, WorkingStatus $workingStatus) {
        // ..
    }

    public function name(): string {
        return $this->name;
        // This is not a getter. It is Employee's responsibility to tell us her/his name
    }
}

// We have no magic setters or getters
// all methods are real and can be debugged
// Validations are implicit

$john = new Employee('John', new HiredWorkingStatus());

$john->name(); // returns 'John'