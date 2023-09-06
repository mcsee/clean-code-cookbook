<?

function configureUser() {
    $password = '123456';
    // Setting a password on a variable is a vulnerability
    $user = new User($password);
    // Notice variable doesn't change
}