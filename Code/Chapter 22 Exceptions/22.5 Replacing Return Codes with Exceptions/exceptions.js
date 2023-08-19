function createSomething(arguments) {
    // Magic Creation
    success = false; // we failed
    // We failed to create
    if (!success) {
        throw new Error('We didnt have permission to create...');
    }
    return createdObject;
}

try {
    var myObject = createSomething('argument');
    // no IFS, just happy path
} catch (exception) {
    // deal with it!
    console.log(exception.message);
}
// myObject holds my expected object