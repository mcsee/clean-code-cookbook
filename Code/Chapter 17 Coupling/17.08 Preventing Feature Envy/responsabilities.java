class Job {

 void printAddress() {

   System.out.println("This is your job position address");

   System.out.println(this.address().street());
   System.out.println(this.address().city());
   System.out.println(this.address().ZipCode());
  
  // We might even move this responsibility directly to the address !
  // Some address information is relevant to a job and not for package tracking
 } 
}

class Candidate {
  void printJobAddress(Job job) {
    job.printAddress();
  }
}