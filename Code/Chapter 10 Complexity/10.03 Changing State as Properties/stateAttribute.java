public abstract class OrderState { }

public final class OrderStatePending extends OrderState { }
// This is a polymorphic hierarchy with different behavior
// An enum is not enough to model state

public final class Order {    
    public Order(LinkedList<int> items) {
        LinkedList<int> items = items;
        OrderState state = new OrderStatePending();
    }
    
    public function changeStatus(OrderState newState) {
        OrderState state = newState;
    }
    
    public function confirm() {
        state.Confirm(this);
    }
}