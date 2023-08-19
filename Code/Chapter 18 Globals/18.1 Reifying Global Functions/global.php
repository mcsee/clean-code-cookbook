<?

class Employee {
    function taxesPayedUntilToday() {
        return database()->select(
            "SELECT TAXES FROM EMPLOYEE".
            " WHERE ID = " . $this->id() .
            " AND DATE < " . currentDate());
    }
}