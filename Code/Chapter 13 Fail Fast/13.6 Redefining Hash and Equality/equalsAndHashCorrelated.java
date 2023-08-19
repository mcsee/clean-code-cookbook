public class Person {
 
public String name;
// Public attributes are another smell  
 
 @Override
 public boolean equals(Person anotherPerson) {
   return name.equals(anotherPerson.name); 
 }
 	
@Override
 public int hashCode() {
   return name.hashCode(); 
 }
 // This is just an example of non-correlation  
 
}