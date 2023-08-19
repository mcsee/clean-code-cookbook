class Time {
   constructor(hour, minute, seconds, timezone) {
     this.hour = hour;    
     this.minute = minute;  
     this.seconds = seconds;  
     this.timezone = timezone;  
  }  
  // Removed now() since is invalid without context
}

class RelativeClock {
   constructor(timezone) {
     this.timezone = timezone;
   }
   now(timezone) {
     var localSystemTime = this.localSystemTime();
     var localSystemTimezone = this.localSystemTimezone();
     // Do some math translating timezones
     // ...
     return new Time(..., timezone);     
   }  
}