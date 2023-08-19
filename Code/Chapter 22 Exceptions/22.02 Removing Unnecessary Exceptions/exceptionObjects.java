import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FileReader {

    public static void main(String[] args) {
        FileReader file = null;

        try {
            file = new FileReader("source.txt");
            file.read();
        }
        catch(FileException exception) {
            if (exception.description == (this.expectionMessages().errorDescriptionFileTemporaryLocked() {
                // sleep and retry
                // IF behavior is the same with all the exceptions just change the text on 
                // object creation and raise the incorrect instance
            }            
            this.showErrorToUser(exception.messageToUser();
             // This example is simplified. Text should be translated
        }                
        finally {
            try {
                file.close();
            } 
        }
    }
}