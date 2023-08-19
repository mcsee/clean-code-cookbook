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
        catch(FileNotFoundException e) {
            e.printStackTrace();
        }
        catch(FileLockedException e) {
            e.printStackTrace();
        }
        catch(FilePermissionsException e) {
            e.printStackTrace();
        }
        catch(IOException e) {
            e.printStackTrace();
        }
        finally {
            try {
                file.close();
            }
            catch(IOException e) {
                e.printStackTrace();
            }
        }
    }
}