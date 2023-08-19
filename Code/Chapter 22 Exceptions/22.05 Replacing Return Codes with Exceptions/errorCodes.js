function createSomething(arguments) {
    // Magic Creation
    success = false; // we failed

    // We failed to create
    if (!success) {
        return {
            object: null,
            errorCode: 403,
            errorDescription: 'We didnt have permission to create...'
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
// but myObject does not hold My Object but an implementative
// and accidental array
// from now on me need to remember this