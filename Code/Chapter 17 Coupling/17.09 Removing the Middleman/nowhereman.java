public class Client {
   public ZipCode zipCode() {
      // Can also store it
      return new ZipCode(’CA90210’);
   }
}

public class Application {   
   ZipCode zipCode = client.address().zipCode();
}