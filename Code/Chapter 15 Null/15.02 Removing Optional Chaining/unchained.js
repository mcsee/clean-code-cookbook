function login() {}

const user = {
  name: 'Hacker',
  credentials: { expired: false }
};

if (!user.credentials.expired) {
  login();
}

// Also compact 
// User is a real user or a polymorphic NullUser
// Credentials are always defined.
// Can be an instance of InvalidCredentials
// Assuming we eliminated nulls from our code

if (user.functionDefinedOrNot !== undefined) {  
    functionDefinedOrNot();
}

// This is also wrong.
// Explicit undefined checks are yet another code smell