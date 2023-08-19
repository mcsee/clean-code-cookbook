if (cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();
// Production code

// Either if we need to force or skip the condition
// we can do it with a covering test forcing
// real world scenario and not the code

testLargeCartItems() {}

testUserIsRetail() {}