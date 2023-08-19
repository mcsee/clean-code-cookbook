public class Rectangle {
    
    int length;
    int width;
    
    public Rectangle(int length, int width) {
        length = length;
        width = width;
    }
   
    public int area() {
        return length * width;
    }
}

public class Square extends Rectangle {
     
     public Square(int size) {
        super(size, size); 
    }
   
    public int area() {
        return length * length;
    }
}

public class Box extends Rectangle{    
      
}