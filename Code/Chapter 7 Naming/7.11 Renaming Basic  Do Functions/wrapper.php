<?

final class Calculator {

    private $cachedResults;

    function computeSomething() {
        if (isset($this->cachedResults)) {
            return $this->cachedResults;
        }
        $this->cachedResults = $this->logAndComputeSomething();
    }

    private function logAndComputeSomething() {
        $this->logProcessStart();
        $result = $this->basicComputeSomething();
        $this->logProcessEnd();
        return $result;
    }

    private function basicComputeSomething() {
        // Do Real work here
    }

}