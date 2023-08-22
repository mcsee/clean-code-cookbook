var ouagadougou = new Location(); 
var today = myTimeSource.currentDateIn(ouagadougou);

function testGivenAYearHasPassedAccruedInterestsAre10() {
    var mockTime = new MockedDate(new Date(2021, 1, 1));
    var domainSystem = new TimeSystem(mockTime);
    // ..
    mockTime.moveDateTo(new Date(2022, 1, 1));
    // … You set up the yearly interest rate
    assertEquals(10, domainSystem.accruedInterests());
}