public class Song {
   private String name;
   private Artist author; // Will reference rich objects
   private Album album; // instead of primitive data types

   public String albumName() {
     return album.name() ;
}