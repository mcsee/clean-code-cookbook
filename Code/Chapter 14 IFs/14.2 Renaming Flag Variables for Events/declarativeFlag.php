<?

function dummyFunction()
{
    $atLeastOneElementWasFound = false;

    while (!$atLeastOneElementWasFound) {

        $elementSatisfies = doSomething();
        if ($elementSatisfies) {
            $atLeastOneElementWasFound = true;
        }
    }
}