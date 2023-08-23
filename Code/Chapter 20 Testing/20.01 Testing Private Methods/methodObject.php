<?

final class Star {
  
  private $distanceInParsecs;   
  
  public function timeToReachLightToUs() {
    return new ParsecsToLightYearsConverter($this->distanceInParsecs);
  }
}

final class ParsecsToLightYearsConverter {
  public function convert($distanceInParsecs) {
      return 3.26 * $distanceInParsecs;
  }
}

final class ParsecsToLightYearsConverterTest extends TestCase {
  public function testConvert0ParsecsReturns0LightYears() {
    $this->assertEquals(0, (new ParsecsToLightYearsConverter)->convert(0));
  }
    // You can add lots of tests and rely on this object
    // So we don't need to test Star conversions
    // You can't yet test Star public timeToReachLightToUs()
    // This is a simplified scenario
}