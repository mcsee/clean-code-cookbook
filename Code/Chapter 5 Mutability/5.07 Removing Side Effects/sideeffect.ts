let counter = 0;

function incrementCounter(value: number): void {
  // Two side effects
  
  counter += value; 
  // it modifies the global variable counter 
  
  console.log(`Counter is now ${counter}`); 
  // it logs a message to the console
}