public abstract class OrderState {
     
}

public final class OrderStatePending extends OrderState {
     
}

public final class Order {
    
    public Order(LinkedList<int> items) {
        LinkedList<int> items = items;
        OrderState state = new OrderStatePending();
    }
    
    public function changeStatus(OrderState newState) {
        OrderState state = newState;
    }
}