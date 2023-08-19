var lastBlockchainBlock;

lastBlockchainBlock = findlastBlockchainBlock();
// ...

// Many function calls 
// we should refactor them to minimize space
// between variable definition and usage

addBlockAfter(lastBlockchainBlock);