final class Address {
 void print() {
   System.out.println(this.street);
   System.out.println(this.city);
   System.out.println(this.zipCode);   
 } 
 
 bool isInCounty(Country country) {
  return this.country == country;
}

class Job {
 void printAddress() {

   System.out.println("This is your position address");

   this.address().print());
   
   if (this.address().isInCountry(this.country()) {
        System.out.println("It is a local job");
   } 
 } 
}

class Candidate {
  void printJobAddress(Job job) {
    job.printAddress();
  }
}