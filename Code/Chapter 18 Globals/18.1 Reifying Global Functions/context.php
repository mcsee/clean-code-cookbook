<?

final class EmployeeTaxesCalculator {
    function taxesPayedUntilToday($context) {
        return $context->SelectTaxesForEmployeeUntil(
            $this->ssn,
            $context->currentDate());
    }
}