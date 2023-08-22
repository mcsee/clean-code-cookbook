public interface Vehicle {
    public void start();
    public void stop();
}

public class Car implements Vehicle {
    public void start() {
        System.out.println("Running...");
    }
    public void stop() {
        System.out.println("Stopping...");
    }
}

// No more concrete vehicles??