public class QuotesSaver {
    public void Save(string filename) {
        if (!FileSystem.IsPathValid(filename)) {
            throw new ArgumentException("Invalid path " + filename);
        } else if (!FileSystem.ParentDirectoryExists(filename)) {
            throw new I0Exception("Parent directory missing at " + filename);
        } else if (FileSystem.Exists(filename)) {
             throw new I0Exception("File exists: " + filename);
        }
        this.SaveOnValidFilename(filename);
    }
}