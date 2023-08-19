<?

final class RangeUnitTest extends TestCase {
 
  function testValidOffset() {
    $range = new Range(1, 1);
    $offset = $range->offset();
    $this->assertTrue(10 == $offset);    
    // No functional essential description :(
    // Accidental description provided by tests is very bad
  }  
}

// When failing Unit framework will show us
//
// 1 Test, 1 failed
// Failing asserting true matches expected false :(
// () <-- no business description :(
//
// <Click to see difference> - Two booleans
// (and a diff comparator will show us two booleans)