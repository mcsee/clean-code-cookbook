class Person
{
  private string name;  
  
  public Person(string personName)
  {
    name = personName;
    // immutable
    // no getters, no setters
  }

  // ... more protocol, probably accessing private variable name
}