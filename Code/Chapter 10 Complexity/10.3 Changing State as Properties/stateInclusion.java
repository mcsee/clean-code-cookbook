import java.io.*; 
import java.util.*; 

final class Order {
    
    public Order(LinkedList<int> items) {
        items = items;
    }     
}

class OrderProcessor {
    public static void main( String args[] ) {
  
    LinkedList<int> elements = new LinkedList<int>(); 
    elements.add(1);
    elements.add(2);
  
    Order sampleOrder = new Order(elements);
  
    Collection<Order> pendingOrders = new LinkedList<Order>();
    Collection<Order> confirmedOrders = new LinkedList<Order>(); 
    
    pendingOrders.add(sampleOrder);  
    
    pendingOrders.remove(sampleOrder);  
    confirmedOrders.add(sampleOrder);

    }
}