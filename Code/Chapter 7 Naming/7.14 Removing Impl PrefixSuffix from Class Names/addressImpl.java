public interface Address extends ChangeAware, Serializable {

    String getStreet();
}

// Wrong Name - There is no concept 'AddressImpl' in real world
public class AddressImpl implements Address {
    private String street;
    private String houseNumber;
    private City city;
    // ..
}