class Address {
  String description = "Address: ";

  public class City {
    String name = "Doha";
  }
}

public class Main {
  public static void main(String[] args) {
    Address homeAddress = new Address();
    Address.City homeCity = homeAddress.new City();
    System.out.println(homeAddress.description + homeCity.name);
  }
}

// The output is "Address: Doha"
//
// If you change privacy to 'private class City' 
//
// We you an error " Address.City has private access in Address"