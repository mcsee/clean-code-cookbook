function asyncFunc1() {
  return new Promise((resolve, reject) => {
    // Async operation
    // ...
    // If successful
    resolve(result1);
    // If error
    reject(error);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    // Async operation
    // ...
    // If successful
    resolve(result2);
    // If error
    reject(error);
  });
}

async function performAsyncOperations() {
  try {
    const result1 = await asyncFunc1();
    const result2 = await asyncFunc2();
    const result3 = await asyncFunc3();
    // Continue with further operations
  } catch (error) {
    console.log(error);
  }
}

performAsyncOperations();