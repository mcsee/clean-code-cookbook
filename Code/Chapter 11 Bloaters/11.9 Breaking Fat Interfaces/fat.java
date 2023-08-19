interface Animal {
  void eat();
  void sleep();
  void makeSound();
  // This protocol should be common to all animals
}

class Dog implements Animal {
  public void eat() { }
  public void sleep() { }
  public void makeSound() { }
}

class Fish implements Animal
  public void eat() { }
  public void sleep() {
    throw new UnsupportedOperationException("I do not sleep");
  }
  public void makeSound() {
    throw new UnsupportedOperationException("I cannot make sounds");
  }
}

class Bullfrog implements Animal
  public void eat() { }
  public void sleep() { 
    throw new UnsupportedOperationException("I do not sleep");  
  }
  public void makeSound() { }
}