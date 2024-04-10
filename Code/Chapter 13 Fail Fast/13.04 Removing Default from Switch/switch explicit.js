switch (value) {
  case value1:
    // if value1 matches the following will be executed..
    doSomething();
    break;
  case value2:
    // if value2 matches the following will be executed..
    doSomethingElse();
    break;
  case value3:
  case value4:
    // You currently know these options exist
    doSomethingSpecial();
    break;
  default:
    // if value does not match the above values you need a decision
    throw new Exception('Unexpected ' + value + ' need to consider it');
    break;
}