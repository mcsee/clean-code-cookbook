class Rectangle 
 { 
       int length; 
       int breadth; 
       
       int area() 
       {
         return length * breadth;
       } 
 } 
// We are creating a premature abstraction
// And misusing is-a relation since a Square "is a" Rectangle

class Square extends Rectangle
 { 
       int length;  
       
       int area() 
       {  
         return length * length; 
       } 
 } 