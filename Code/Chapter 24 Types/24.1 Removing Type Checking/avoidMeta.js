/*Avoid these methods
if (typeof(x) === 'undefined') {
    console.log('variable x is not defined');   
}

function isNumber(data) {
  return (typeof data === 'number');
}
*/

class Animal {
} 

class Rabbit extends Animal {
  move() {
    console.log("I'm running");
  }  
}

class Seagull extends Animal {
  move() {
    console.log("I'm flying");
  }  
}

let bunny = new Rabbit();
let livingstone = new Seagull();

bunny.move();
livingstone.move();