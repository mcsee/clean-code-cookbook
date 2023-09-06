<?

define("USER_PASSWORD", '123456')

function configureUser() {  
    $user = new User(USER_PASSWORD);
}

// or 

function configureUser() {  
    $user = new User(userPassword());
}

function userPassword() : string {
    return '123456';
}