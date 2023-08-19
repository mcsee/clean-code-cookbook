<? 

final class Poll {
    
    function _construct(
        array $questions,
        AnonnyomousStrategy $annonymousStrategy,
        ValidationPolicy $validationPolicy) {
        // ...
    }
}


// invalid
new Poll([]);
new Poll([], new NoAnonnyomousValidStrategy());
new Poll([], , new StrictValidationPolicy());

// Valid
new Poll([], new NoAnonnyomousValidStrategy(), new StrictValidationPolicy());