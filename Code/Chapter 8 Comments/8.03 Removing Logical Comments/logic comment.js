if (cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();
// Production code

// the false acts to temporary skip the if condition
if (false && cart.items() > 11 && user.isRetail())  { 
  doStuff();
}
doMore();

if (true || cart.items() > 11 && user.isRetail())  {
// Same hack to force the condition
// The code after the true is never evaluated  