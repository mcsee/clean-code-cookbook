abstract class Collection {
    public abstract int size();
    
}

final class Stack extends Collection { 
    private contents[] ArrayList;
  
    public Stack() {      
      contents = new long[maxSize];      
    }  
    public void push(Object value) { … }
    public Object pop() { … }
    public int size() {
        return contents.size();
    }
}

final class ArrayList extends Collection {
    public int size() {
     // ...
    }
}