interface Animal {
  void move();
  void reproduce();  
}
// You can even break these two responsibilities

class Dog implements Animal {
  public void move() { }
  public void reproduce() { } 
}

class Fish implements Animal {
  public void move() { }
  public void reproduce() { } 
}

class Bullfrog implements Animal {
  public void move() { }
  public void reproduce() { } 
}