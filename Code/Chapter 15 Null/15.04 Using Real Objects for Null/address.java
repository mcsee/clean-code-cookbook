// There are just "addresses"
public class Address {
	
    private String zipCode;
    private String city;
    private String state;

    public Address(String city, String state, String zipCode) {
        // Looks anemic :(
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }

    public String zipCode() {
        return zipCode;
    }
	
    public String city() {
        return city;
    }

    public String state() {
        return state;
    }

}

Address nullAddress = new Address(
    Constants.EMPTY_STRING, 
    Constants.EMPTY_STRING, 
    Constants.EMPTY_STRING);
// You have our null object
// You should NOT assign it to a singleton, static or global
// It behaves like a null object. That's enough
// No premature optimizations