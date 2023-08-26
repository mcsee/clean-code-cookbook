public interface Iterator { 
     public bool HasNext { get; set;}
     public object Next();
}

public Iterator Reverse(Iterator iterator) {
    var list = new List<int>();
    while (iterator.HasNext) {
       list.Insert(0, iterator.Next());
    }
    return new ListIterator(list);
}

public class MyCollection implements Iterator { 
     public bool HasNext { get; set;} // Implementation details
     public object Next(); // Implementation details
}

public class myDomainObject sum(Iterator anObjectThatCanBeIterated) {
 // Loose coupling
}

// Can use any Iterator
// (even a mocked one as long as it adheres to the protocol)