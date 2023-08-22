class Dog {
   constructor(feet) {
     this.feet = feet;    
  }
  walk() {
    // This is encapsulated on how the dog walks
    for (var foot of this.feet) {
      foot.move(); 
    }
  }
}

class Foot {
  move() { }
}

feet = [new Foot(), new Foot(), new Foot(), new Foot()];
dog = new Dog(feet);
dog.walk();