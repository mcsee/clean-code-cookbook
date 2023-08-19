<?

function setUpChessBoard() {
    $this->placeOnBoard($this->whiteTower);
    $this->placeOnBoard($this->whiteKnight);
    // A lot more lines
    
    // Empty space to pause definition
    $this->placeOnBoard($this->blackTower);
    $this->placeOnBoard($this->blackKnight);
    // A lot more lines
}