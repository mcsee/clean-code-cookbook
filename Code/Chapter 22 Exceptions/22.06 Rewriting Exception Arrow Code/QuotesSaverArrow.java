class QuotesSaver {
    public void Save(string filename) {
        if (FileSystem.IsPathValid(filename)) {
            if (FileSystem.ParentDirectoryExists(filename)) {
                if (!FileSystem.Exists(filename)) {
                    this.SaveOnValidFilename(filename);
                } else {
                    throw new I0Exception("File exists: " + filename);
                }
            } else {
                throw new I0Exception("Parent directory missing at " + filename);
            }
        } else {
            throw new ArgumentException("Invalid path " + filename);
        }
    }
}