<?

final class Calculator {
    function computeSomething() {
        // Do Real work here since I am the compute method
    }
}

// Clean and cohesive class, single responsibility

final class CalculatorDecoratorCache {

    private $cachedResults;
    private $decorated;

    function computeSomething() {
        if (isset($this->cachedResults)) {
            return $this->cachedResults;
        }
        $this->cachedResults = $this->decorated->computeSomething();
    }
}

final class CalculatorDecoratorLogger {

    private $decorated;

    function computeSomething() {
        $this->logProcessStart();
        $result = $this->decorated->computeSomething();
        $this->logProcessEnd();
        return $result;
    }
}