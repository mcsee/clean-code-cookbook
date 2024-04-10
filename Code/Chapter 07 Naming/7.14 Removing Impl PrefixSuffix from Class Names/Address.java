// Simple
public class Address {
    private String street;
    private String houseNumber;
    private City city;
    // ..
}

// OR
// Both are real-world names
public class Address implements ContactLocation {
    private String street;
    private String houseNumber;
    private City city;
    // ..
}