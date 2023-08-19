<?

function translateFile() {
    $this->buildFilename();
    $this->readFile();
    $this->assertFileContentsAreOk();
    // A lot of lines more
    
    // Empty space to pause definition
    $this->translateHiperLinks();
    $this->translateMetadata();
    $this->translatePlainText();
    
    // Yet Another empty space
    $this->generateStats();
    $this->saveFileContents();
    // A lot of more lines
}