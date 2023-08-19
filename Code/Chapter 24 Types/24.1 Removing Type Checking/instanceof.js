if (typeof(x) === 'undefined') {
    console.log('variable x is not defined');   
}

function isNumber(data) {
  return (typeof data === 'number');
}

function move(animal) {
  if (animal instanceof Rabbit) {
      animal.run()
  }
  if (animal instanceof Seagull) {
      animal.fly()
  } 
}
 
class Rabbit {
  run() {
    console.log("I'm running");
  }  
}

class Seagull {
  fly() {
    console.log("I'm flying");
  }  
}

let bunny = new Rabbit();
let livingstone = new Seagull();

move(bunny);
move(livingstone);