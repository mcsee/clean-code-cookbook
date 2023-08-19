public class Person {
 
public String name;
// Public attributes are another smell  
 
 @Override
 public boolean equals(Person anotherPerson) {
   return name.equals(anotherPerson.name); 
 }
 	
@Override
 public int hashCode() {
   return (int)(Math.random()*256); 
 }
 // This is just an example of non-correlation  
 
 // When using HashMaps we can make a mistake 
 // and guess the object is not present in the collection
 
}