class Time {
   constructor(hour, minute, seconds) {
     this.hour = hour;    
     this.minute = minute;  
     this.seconds = seconds;  
  }
    now() {
      // call operating system
    }  
}

// Adding a TimeZone will have a big Ripple Effect
// Changing now() to consider timezone will also bring the effect