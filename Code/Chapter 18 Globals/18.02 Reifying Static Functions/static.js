class DateStringHelper {
   static format(date) {
     return date.toString('yyyy-MM-dd');   
  }
}

DateStringHelper.format(new Date());