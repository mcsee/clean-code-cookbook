public class EmailAddress {
    public String emailAddress;

    public EmailAddress(String address) {
        string expressions = @"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$";
        if (!Regex.IsMatch(email, expressions) {
          throw new Exception('Invalid email address');
        }
        this.emailAddress = address;
    }
}

destination = new EmailAddress("destination@example.com");