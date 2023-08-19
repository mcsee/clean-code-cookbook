public class Vehicle
{
  // the class is not a leaf. Therefore it should be abstract
    
  // an abstract method that only declares, but does not define the start 
  // functionality because each vehicle uses a different starting mechanism
  abstract void start();
}

public class Car extends Vehicle
{
  // the class is a leaf. Therefore it should be final
}

public class Motorcycle extends Vehicle
{
  // the class is a leaf. Therefore it should be final
}