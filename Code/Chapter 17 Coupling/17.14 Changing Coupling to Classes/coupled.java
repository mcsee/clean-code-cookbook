public class MyCollection { 
     public bool HasNext { get; set;} // implementation details
     public object Next(); // implementation details
}

public class MyDomainObject sum(MyCollection anObjectThatCanBeIterated) {
 // Tight coupling
}

// We cannot fake or mock this method 
// since it always expects an instance of MyCollection