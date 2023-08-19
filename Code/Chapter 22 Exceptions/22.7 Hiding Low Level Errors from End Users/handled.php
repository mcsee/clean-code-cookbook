<?

// A user-defined exception handler function
function myException($exception) {
    logError($exception->description())
    // We don't show Exception to final users      
}

// Set user-defined exception handler function
set_exception_handler("myException");