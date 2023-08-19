class Candidate {

 void printJobAddress(Job job) {

   System.out.println("This is your position address");

   System.out.println(job.address().street());
   System.out.println(job.address().city());
   System.out.println(job.address().zipCode());
   
   if (job.address().country() == job.country()) {
        System.out.println("It is a local job");
   } 
}