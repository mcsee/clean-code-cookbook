<?

final class RangeUnitTest extends TestCase {
 
  function testValidOffset() {
    $range = new Range(1, 1);
    $offset = $range->offset();
    $this->assertEquals(10, $offset, 'Pages must have 10 as offset');
    // Expected value should always be first argument
    // You add a functional essential description
    // to complement accidental description provided by tests
  }  
}

// When failing Unit framework will show us
//
// 1 Test, 1 failed
// Failing asserting 0 matches expected 10
// All pages must have 10 as offset <-- business description
//
// <Click to see difference> 
// (and a diff comparator will help us and it will be a great help
// for complex objects like objects or jsons)