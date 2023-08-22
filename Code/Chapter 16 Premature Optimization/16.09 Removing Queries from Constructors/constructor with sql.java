public class Person {
  int childrenCount; 

  public Person(int id) {
    childrenCount = database.sqlCall(
      "SELECT COUNT(CHILDREN) FROM PERSON WHERE ID = " . id); 
  }
}