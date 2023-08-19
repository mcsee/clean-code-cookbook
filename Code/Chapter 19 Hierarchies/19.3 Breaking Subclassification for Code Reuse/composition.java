abstract public class Shape{
    
    abstract public int area();
}

public final class Rectangle extends Shape {
    
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

public final class Square extends Shape {
     
     int size;
      
     public Square(int size) {
        size = size; 
    }
   
    public int area() {
        return size * size;
    }
}

public final class Box {
    
    Square shape;
    
    public Box(int size) {
        shape = new Square(size); 
    }
    
    public int area() {
        return shape.area();
    }
}