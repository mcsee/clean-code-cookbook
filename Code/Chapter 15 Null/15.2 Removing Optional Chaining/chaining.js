const user = {
  name: 'Hacker'
};

if (user?.credentials?.notExpired) {
  user.login();
}

user.functionDefinedOrNot?.();

// Seems compact but it is hacky and has lots
// of potential NULLs and Undefined