<?

// A user-defined exception handler function
function myException($exception) {
    logError($exception->description())
    // You don’t show Exception to final users
    // This is a business decision
    // You can also show a generic user message     
}

// Set user-defined exception handler function
set_exception_handler("myException");