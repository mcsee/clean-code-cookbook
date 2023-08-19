<?

class School {

    private $name;
    private $location;

    function description() {
        return $this->name . ' of ' . $this->location->name;
    }

}