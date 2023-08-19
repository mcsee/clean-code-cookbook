var ouagadougou = new Location(); 

var today = myTimeSource.currentDateIn(ouagadougou);

function testTimePasses() {
 
  $mockTime = new MockedDate(new Date(1,1,2021));
  myDomainSystem = new TimeSystem(new MockedTime());
  // ..
  
  $mockTime.moveDateTo(new Date(1,1,2022));
  
  // ...
  this.assert(10, myDomainSystem.accuredInterests());  
  
}