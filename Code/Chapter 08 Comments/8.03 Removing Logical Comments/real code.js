if (cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();
// Production code

// Either if you need to force or skip the condition
// you can do it with a covering test forcing
// real world scenario and not the code

testLargeCartItems() {}

testUserIsRetail() {}