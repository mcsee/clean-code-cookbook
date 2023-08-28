function createSomething(arguments) {
    // Magic Creation
    success = false; // you failed

    // You failed to create
    if (!success) {
        return {
            object: null,
            errorCode: 403,
            errorDescription: 'You don\'t have permission to create...'
        };
    }

    return {
        object: createdObject,
        errorCode: 400,
        errorDescription: ''
    };
}

var myObject = createSomething('argument');
if (myObject.errorCode != 400) {
    console.log(myObject.errorCode + ' ' + myObject.errorDescription)
}
// but myObject does not hold My Object but
// an accidental auxiliary based on implementation
// from now on you need to remember this