<?

function translateFile() {
    $this->readFileToMemory();
    $this->translateContents();
    $this->generateStatsAndSaveFileContents();  
}