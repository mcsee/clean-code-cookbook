public class Client {
    Address address;
    // client now has to expose its address
    public address() {
        return address;
    }
}

public class Address {
    private ZipCode zipCode;
    
    public ZipCode zipCode() {
        return new ZipCode('CA90210');
    }
}

public class Application {   
   ZipCode zipCode = client.address().zipCode();
}