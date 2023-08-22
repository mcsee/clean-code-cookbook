class Address {
  String description = "Address: ";
}
 
class City {
  String name = "Doha";
}

public class Main {
  public static void main(String[] args) {
    Address homeAddress = new Address();
    City homeCity = new City();
    System.out.println(homeAddress.description + homeCity.name);
  }
}

// The output is "Address: Doha"
//
// Now you can reuse and test the City concept