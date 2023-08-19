class File {
public:
    File(const std::string& filename) {
        file_ = fopen(filename.c_str(), "r");
    }
    
    ~File() {
        if (file_) {
            fclose(file_);
        }
    }
    
private:
    FILE* file_;
};
