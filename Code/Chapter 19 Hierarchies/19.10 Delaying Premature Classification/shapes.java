class Rectangle 
 { 
       int length; 
       int breadth; 
       
       int area() 
       {
         return length * breadth;
       } 
 }  

class Square 
{ 
       int length;  
       
       int area() 
       {  
         return length * length; 
       } 
 } 
// Square might-be a Rectangle
// But it does not follow behaves-like relation so we won't go ahead
// and create a strong relation between them
// Maybe they are shapes. We don't have enough examples and protocol yet
// We will not guess until further knowledge
