public class Client {
    Address address;
    public ZipCode zipCode() {
        return address.zipCode();
    }
}

public class Address {
    private ZipCode zipCode;
    
    public ZipCode zipCode() {
        return new ZipCode('CA90210');
    }
}

public class Application {   
   ZipCode zipCode = client.zipCode();
}