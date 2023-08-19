class Dog {
   constructor(feet) {
     this.feet = feet;    
  }
  getFeet() {    
    return this.feet;
  }  
}

class Foot {
  move() {
    // ..
  }
}

feet = [new Foot(), new Foot(), new Foot(), new Foot()];
dog = new Dog(feet);

for (var foot of dog.getFeet()) {
  foot.move(); 
}