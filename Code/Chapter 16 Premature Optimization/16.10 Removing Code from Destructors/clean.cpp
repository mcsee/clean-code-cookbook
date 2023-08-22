class File {
public:
    File() : file_(nullptr) {}
    
    bool Open(const std::string& filename) {
        if (file_) {
            fclose(file_);
        }
        file_ = fopen(filename.c_str(), "r");
        return (file_ != nullptr);
    }
    
    bool IsOpen() const {
        return (file_ != nullptr);
    }
    
    void Close() {
        if (file_) {
            fclose(file_);
            file_ = nullptr;
        }
    }
    
    ~File() {
        // Instead of closing the file we throw an exception 
        // If it is open (which is an invalid scenario)
        if (file_) {
            throw std::logic_error(
                "File is still open after reaching its destructor");
        }
    }
    
private:
    FILE* file_;
};
