class DateToStringFormatter {
   constructor(date) {
      this.date = date;
   }
     
   englishFormat() {
     return this.date.toString('yyyy-MM-dd');    
  } 
}

new DateToStringFormatter(new Date()).englishFormat()

