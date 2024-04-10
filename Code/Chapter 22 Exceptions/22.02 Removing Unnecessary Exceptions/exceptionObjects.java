public class FileReader {

    public static void main(String[] args) {
        FileReader file = null;

        try {
            file = new FileReader("source.txt");
            file.read();
        }
        catch(FileException exception) {
            if (exception.description == 
                (this.expectedMessages()
                 .errorDescriptionFileTemporaryLocked(){
                // sleep and retry
                // IF behavior is the same with all the exceptions
                // just change the text on 
                // object creation and raise the correct instance
            }            
            this.showErrorToUser(exception.messageToUser();
             // This example is simplified. 
             // You should translate the text
        }                
        finally {
            try {
                file.close();
             } catch (IOException ioException) {
                ioException.printStackTrace();
             }
        }
    }
}